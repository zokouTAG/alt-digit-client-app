<template>
  <div>
    <h3 class="mb-4 text-center">{{ config.title }}</h3>
    <b-form @submit.prevent="onSubmit" v-if="config.questions.length > 0">
      <div v-for="question in sortedQuestions" :key="question.id" class="mb-4">
        <b-form-group :label="question.question" :label-for="question.variable" :description="question.description">
          <!-- Field Type: Text -->
          <b-form-input v-if="question.type === 'Text' || question.type === 'Contact' || question.type === 'Adress'" :id="question.variable" v-model="formData[question.variable]"
            type="text" :required="question.isRequired" :placeholder="question.placeholder || ''"></b-form-input>

          <!-- Field Type: LongText -->
          <b-form-textarea v-else-if="question.type === 'Long Text'" :id="question.variable"
            v-model="formData[question.variable]" rows="4" :required="question.isRequired"
            :placeholder="question.placeholder || ''"></b-form-textarea>

          <!-- Field Type: Number  -->
          <b-form-input v-else-if="question.type === 'Number'" :id="question.variable"
            v-model="formData[question.variable]" type="number" :required="question.isRequired"
            :placeholder="question.placeholder || ''"></b-form-input>

          <!-- Field Type: Phone - Version simple -->
          <b-form-input
            v-else-if="question.type === 'Phone'"
            :id="question.variable"
            v-model="formData[question.variable]"
            type="tel"
            :required="question.isRequired"
            :placeholder="question.placeholder || 'Ex: +33 6 12 34 56 78'"
            pattern="^\+?[0-9\s-()]{6,}"
            @input="validatePhone($event, question.variable)"
          />

          <!-- Field Type: Currency - CORRIGÉ -->
          <b-row v-else-if="question.type === 'Currency'">
            <b-col cols="8">
              <b-form-input :id="question.variable" :value="currencyAmounts[question.variable] || ''" type="number"
                step="0.01" :required="question.isRequired" :placeholder="question.placeholder || ''"
                @input="event => updateCurrencyAmount(question.variable, event.target.value)"></b-form-input>
            </b-col>
            <b-col cols="4">
              <b-form-select v-model="selectedCurrencies[question.variable]" :options="currencies"
                :required="question.isRequired"
                @change="() => updateCurrencyDisplay(question.variable)"></b-form-select>
            </b-col>
          </b-row>

          <!-- Field Type: Select -->
          <b-form-select v-else-if="question.type === 'Select'" :id="question.variable"
            v-model="formData[question.variable]" :options="[
              { value: null, text: 'Veuillez sélectionner une option' },
              ...question.options?.map(opt => ({
                value: opt.value,
                text: opt.text
              })) || []
            ]" :required="question.isRequired"></b-form-select>

          <!-- Field Type: MultiSelect -->
          <b-form-select v-else-if="question.type === 'MultiSelect'" :id="question.variable"
            v-model="formData[question.variable]" :options="question.options?.map(opt => ({
              value: opt.value,
              text: opt.text
            })) || []" multiple :required="question.isRequired"></b-form-select>

          <!-- Field Type: Date -->
          <b-form-input v-else-if="question.type === 'Date'" :id="question.variable"
            v-model="formData[question.variable]" type="date" :required="question.isRequired"></b-form-input>

          <!-- Field Type: Time -->
          <b-form-input v-else-if="question.type === 'Time'" :id="question.variable"
            v-model="formData[question.variable]" type="time" :required="question.isRequired"></b-form-input>

          <b-form-input v-else-if="question.type === 'Email'" :id="question.variable"
            v-model="formData[question.variable]" type="email" :required="question.isRequired"></b-form-input>

          <!-- Field Type: File -->
          <b-form-file v-else-if="question.type === 'File'" :id="question.variable"
            v-model="formData[question.variable]" :accept="getFileAcceptTypes(question.options)"
            :required="question.isRequired"
            :placeholder="question.placeholder || 'Sélectionner un fichier'"></b-form-file>

          <!-- Field Type: Country -->
          <b-form-select v-else-if="question.type === 'Country'" :id="question.variable"
            v-model="formData[question.variable]" :options="countryOptionsWithPlaceholder"
            :required="question.isRequired"></b-form-select>

          <!-- Field Type: Nationality -->
          <b-form-select v-else-if="question.type === 'Nationality'" :id="question.variable"
            v-model="formData[question.variable]" :options="nationalityOptionsWithPlaceholder"
            :required="question.isRequired"></b-form-select>

          <!-- Field Type: TypeOfCompany -->
          <b-form-select v-else-if="question.type === 'TypeOfCompany'" 
            :id="question.variable"
            v-model="formData[question.variable]" 
            :options="companyTypeOptions"
            :required="question.isRequired"></b-form-select>
        </b-form-group>
      </div>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { countries } from 'countries-list'
import countries_lib from 'i18n-iso-countries'
import fr_locale from 'i18n-iso-countries/langs/fr.json'
import { computed, onMounted, ref, watch } from 'vue'

// Initialisation unique des locales françaises
countries_lib.registerLocale(fr_locale)

// Liste directe des nationalités en français (sans codes pays)
const NATIONALITIES = [
  // Europe
  'Française', 'Britannique', 'Allemande', 'Italienne', 'Espagnole', 'Portugaise',
  'Belge', 'Suisse', 'Autrichienne', 'Néerlandaise', 'Irlandaise', 'Suédoise',
  'Norvégienne', 'Danoise', 'Finlandaise', 'Islandaise', 'Polonaise', 'Tchèque',
  'Slovaque', 'Hongroise', 'Roumaine', 'Bulgare', 'Croate', 'Slovène',
  'Estonienne', 'Lettone', 'Lituanienne', 'Luxembourgeoise', 'Maltaise',
  'Chypriote', 'Grecque', 'Albanaise', 'Russe', 'Ukrainienne', 'Turque',

  // Afrique
  'Algérienne', 'Marocaine', 'Tunisienne', 'Libyenne', 'Égyptienne', 'Soudanaise',
  'Éthiopienne', 'Kényane', 'Ougandaise', 'Tanzanienne', 'Rwandaise', 'Burundaise',
  'Malgache', 'Mauricienne', 'Seychelloise', 'Sud-africaine', 'Namibienne',
  'Botswanaise', 'Zimbabwéenne', 'Zambienne', 'Malawienne', 'Mozambicaine',
  'Angolaise', 'Congolaise (RDC)', 'Congolaise', 'Centrafricaine', 'Tchadienne',
  'Camerounaise', 'Équato-guinéenne', 'Gabonaise', 'Santoméenne', 'Ghanéenne',
  'Togolaise', 'Béninoise', 'Nigériane', 'Nigérienne', 'Burkinabé', 'Malienne',
  'Sénégalaise', 'Mauritanienne', 'Guinéenne', 'Sierra-léonaise', 'Libérienne',
  'Ivoirienne', 'Gambienne', 'Cap-verdienne', 'Somalienne', 'Djiboutienne',
  'Érythréenne', 'Sud-soudanaise', 'Comorienne', 'Eswatinienne', 'Lesothane',
  'Bissau-guinéenne',

  // Amérique
  'Américaine', 'Canadienne', 'Mexicaine', 'Brésilienne', 'Argentine', 'Chilienne',
  'Péruvienne', 'Colombienne', 'Vénézuélienne', 'Équatorienne', 'Bolivienne',
  'Paraguayenne', 'Uruguayenne', 'Guyanienne', 'Surinamienne', 'Guatémaltèque',
  'Bélizienne', 'Salvadorienne', 'Hondurienne', 'Nicaraguayenne', 'Costaricienne',
  'Panaméenne', 'Cubaine', 'Jamaïcaine', 'Haïtienne', 'Dominicaine', 'Trinidadienne',
  'Barbadienne', 'Bahamienne', 'Antiguaise', 'Dominiquaise', 'Grenadienne',
  'Kittitienne', 'Sainte-lucienne', 'Vincentaise',

  // Asie
  'Chinoise', 'Japonaise', 'Sud-coréenne', 'Nord-coréenne', 'Indienne', 'Pakistanaise',
  'Bangladaise', 'Sri-lankaise', 'Birmane', 'Thaïlandaise', 'Vietnamienne', 'Laotienne',
  'Cambodgienne', 'Malaisienne', 'Singapourienne', 'Indonésienne', 'Philippine',
  'Brunéienne', 'Timoraise', 'Mongole', 'Kazakhe', 'Kirghize', 'Tadjike', 'Turkmène',
  'Ouzbèke', 'Afghane', 'Iranienne', 'Irakienne', 'Syrienne', 'Libanaise',
  'Jordanienne', 'Israélienne', 'Palestinienne', 'Saoudienne', 'Émirienne',
  'Qatarienne', 'Koweïtienne', 'Bahreïnie', 'Omanaise', 'Yéménite',
  'Géorgienne', 'Arménienne', 'Azerbaïdjanaise', 'Bhoutanaise', 'Népalaise',
  'Maldivienne', 'Taïwanaise', 'Hongkongaise',

  // Océanie
  'Australienne', 'Néo-zélandaise', 'Fidjienne', 'Papouane-néo-guinéenne',
  'Salomonaise', 'Vanuatuane', 'Samoane', 'Tongienne', 'Kiribatienne',
  'Tuvaluane', 'Nauruane', 'Palaosienne', 'Micronésienne', 'Marshallaise'
]

// Pré-calcul des options pays (avec codes pour les pays)
const countryOptions = computed(() => {
  const cached = sessionStorage.getItem('countryOptions')
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch (e) {
      // Ignorer les erreurs de parsing et recalculer
    }
  }

  const options = Object.entries(countries)
    .map(([code, country]) => ({
      value: country.name,
      text: countries_lib.getName(code, 'fr', { select: 'official' }) || country.name
    }))
    .sort((a, b) => a.text.localeCompare(b.text, 'fr', { numeric: true }))

  sessionStorage.setItem('countryOptions', JSON.stringify(options))
  return options
})

// Options de nationalité simplifiées (directement les nationalités)
const nationalityOptions = computed(() => {
  const cached = sessionStorage.getItem('nationalityOptions')
  if (cached) {
    try {
      return JSON.parse(cached)
    } catch (e) {
      // Ignorer les erreurs de parsing et recalculer
    }
  }

  const options = NATIONALITIES
    .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))
    .map(nationality => ({
      value: nationality,
      text: nationality
    }))

  sessionStorage.setItem('nationalityOptions', JSON.stringify(options))
  return options
})

// Options avec placeholder
const countryOptionsWithPlaceholder = computed(() => [
  { value: null, text: 'Sélectionnez un pays' },
  ...countryOptions.value
])

const nationalityOptionsWithPlaceholder = computed(() => [
  { value: null, text: 'Sélectionnez une nationalité' },
  ...nationalityOptions.value
])

const fileTypesMapping: Record<string, string> = {
  'pdf': 'application/pdf',
  'document': '.doc,.docx,.pdf',
  'image': 'image/*',
  'excel': '.xls,.xlsx,.csv',
}

// Liste des types d'entreprises français avec leurs descriptions
const companyTypes = [
  { value: 'SARL', text: 'SARL - Société à Responsabilité Limitée' },
  { value: 'EURL', text: 'EURL - Entreprise Unipersonnelle à Responsabilité Limitée' },
  { value: 'SA', text: 'SA - Société Anonyme' },
  { value: 'SAS', text: 'SAS - Société par Actions Simplifiée' },
  { value: 'SASU', text: 'SASU - Société par Actions Simplifiée Unipersonnelle' },
  { value: 'SCI', text: 'SCI - Société Civile Immobilière' },
  { value: 'EIRL', text: 'EIRL - Entreprise Individuelle à Responsabilité Limitée' },
  { value: 'EI', text: 'EI - Entreprise Individuelle' },
  { value: 'Micro-entreprise', text: 'Micro-entreprise (Auto-entrepreneur)' },
  { value: 'SNC', text: 'SNC - Société en Nom Collectif' },
  { value: 'SCOP', text: 'SCOP - Société Coopérative et Participative' },
  { value: 'Association', text: 'Association loi 1901' }
]

// Options pour le select des types d'entreprises
const companyTypeOptions = computed(() => [
  { value: null, text: 'Sélectionnez un type d\'entreprise' },
  ...companyTypes
])

interface Option {
  value: string | number
  text: string
}

interface Question {
  id: string
  order: number
  question: string
  variable: string
  description?: string
  type: 'Text' | 'Long Text' | 'Number' | 'Select' | 'Adress' | 'MultiSelect' | 'Phone' | 'Contact' | 'Radio' | 'TypeOfCompany' | 'Date' | 'Currency' | 'Country' | 'Nationality' | 'Time' | 'Email' | 'TypeOfCompany' | 'File'
  isRequired: boolean
  placeholder?: string
  options?: Option[]
}

interface ActionConfig {
  title: string
  questions: Question[]
}

const props = defineProps<{
  config: ActionConfig
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [formData: Record<string, any>]
  validationChange: [isValid: boolean]
}>()

const formData = ref<Record<string, any>>({})

// État de validité des numéros de téléphone
const phoneValidity = ref<Record<string, boolean>>({})

// CORRECTION: Fonction pour déterminer les types de fichiers acceptés
const getFileAcceptTypes = (options: any | undefined): string => {
  if (!options || options.length === 0) return '*/*'

  return options.map((option: any) => {
    switch (option.toLowerCase()) {
      case 'document':
        return '.pdf,.doc,.docx,.txt,.rtf,.odt'
      case 'image':
        return '.jpg,.jpeg,.png,.gif,.bmp,.svg,.webp'
      case 'video':
        return '.mp4,.avi,.mov,.wmv,.flv,.webm'
      case 'audio':
        return '.mp3,.wav,.ogg,.m4a,.aac'
      case 'archive':
        return '.zip,.rar,.7z,.tar,.gz'
      case 'spreadsheet':
        return '.xls,.xlsx,.csv,.ods'
      default:
        return '*/*'
    }
  }).join(',')
}

// Constantes pour les devises
const currencySymbols = Object.freeze({
  EUR: '€',
  USD: '$',
  XOF: 'FCFA'
})

const currencies = Object.freeze([
  { value: 'EUR', text: 'Euro (€)' },
  { value: 'USD', text: 'Dollar ($)' },
  { value: 'XOF', text: 'Franc CFA (FCFA)' }
])

// CORRECTION: Séparer les montants des devises sélectionnées
const selectedCurrencies = ref<Record<string, string>>({})
const currencyAmounts = ref<Record<string, string>>({})

// CORRECTION: Nouvelles fonctions pour gérer les devises
const updateCurrencyAmount = (variable: string, amount: string) => {
  currencyAmounts.value[variable] = amount
  updateCurrencyDisplay(variable)
}

const updateCurrencyDisplay = (variable: string) => {
  const amount = currencyAmounts.value[variable]
  const currency = selectedCurrencies.value[variable] || 'EUR'

  // Initialiser la devise par défaut si elle n'existe pas
  if (!selectedCurrencies.value[variable]) {
    selectedCurrencies.value[variable] = 'EUR'
  }

  if (amount && amount !== '') {
    const symbol = currencySymbols[currency as keyof typeof currencySymbols]
    formData.value[variable] = `${amount} ${symbol}`
  } else {
    formData.value[variable] = ''
  }
}

// CORRECTION: Fonction pour extraire le montant d'une valeur formatée
const extractAmountFromFormattedValue = (value: string): string => {
  if (!value) return ''
  const match = value.match(/^([0-9.,]+)/)
  return match ? match[1] : ''
}

// Questions triées
const sortedQuestions = computed<Question[]>(() => {
  return [...props.config.questions].sort((a, b) => a.order - b.order)
})

// Validation améliorée avec support du téléphone
const isFormValid = computed(() => {
  if (!props.config.questions.length) return true

  return props.config.questions.every(question => {
    if (!question.isRequired) return true
    
    const value = formData.value[question.variable]
    
    if (question.type === 'Phone') {
      return value && phoneValidity.value[question.variable] === true && /^\+?[0-9\s-()]{6,}$/.test(value)
    }
    
    return Array.isArray(value) ? value.length > 0 : (value !== undefined && value !== null && value !== '')
  })
})

// Validation du numéro de téléphone
const validatePhone = (value: string, variable: string) => {
  const isValid = /^\+?[0-9\s-()]{6,}$/.test(value)
  phoneValidity.value[variable] = isValid
  return isValid
}

// CORRECTION: Initialiser les devises par défaut pour les questions Currency
const initializeCurrencyFields = () => {
  props.config.questions
    .filter(q => q.type === 'Currency')
    .forEach(question => {
      if (!selectedCurrencies.value[question.variable]) {
        selectedCurrencies.value[question.variable] = 'EUR'
      }
      // Si formData contient déjà une valeur, extraire le montant
      const existingValue = formData.value[question.variable]
      if (existingValue) {
        currencyAmounts.value[question.variable] = extractAmountFromFormattedValue(existingValue)
      }
    })
}

// Initialiser les champs téléphone
const initializePhoneFields = () => {
  props.config.questions
    .filter(q => q.type === 'Phone')
    .forEach(question => {
      if (!phoneValidity.value[question.variable]) {
        phoneValidity.value[question.variable] = false
      }
    })
}

// Watchers
let validationTimeout: NodeJS.Timeout | null = null
watch(formData, () => {
  if (validationTimeout) clearTimeout(validationTimeout)
  validationTimeout = setTimeout(() => {
    emit('validationChange', isFormValid.value)
  }, 100)
}, { deep: true })

watch(phoneValidity, () => {
  if (validationTimeout) clearTimeout(validationTimeout)
  validationTimeout = setTimeout(() => {
    emit('validationChange', isFormValid.value)
  }, 100)
}, { deep: true })

watch(() => props.config.questions, () => {
  initializeCurrencyFields()
  initializePhoneFields()
  emit('validationChange', isFormValid.value)
}, { immediate: true })

const onSubmit = (): void => {
  if (isFormValid.value) {
    emit('submit', formData.value)
  }
}

const restoreData = (data: Record<string, any>) => {
  Object.assign(formData.value, data)

  // CORRECTION: Restaurer aussi les montants des devises
  props.config.questions
    .filter(q => q.type === 'Currency')
    .forEach(question => {
      const value = data[question.variable]
      if (value) {
        currencyAmounts.value[question.variable] = extractAmountFromFormattedValue(value)
      }
    })
}

// Initialiser au montage
onMounted(() => {
  initializeCurrencyFields()
  initializePhoneFields()
})
defineExpose({
  restoreData
})
</script>

<style scoped>
</style>