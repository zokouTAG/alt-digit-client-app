import type { ActionType, FieldType } from '~/helpers/constants'

export interface Question {
  id: string
  type: FieldType
  order: number
  options?: Array<{
    text: string
    value: string | null
  }>
  variable: string
  question: string
  isRequired: boolean
  description: string
  placeholder?: string | null
  validation?: Record<string, any>
  default?: any
}

export interface QuestionnaireConfig {
  title: string
  questions: Question[]
}

export interface EmailConfig {
  subject?: string
  destinataires?: string[]
  CC?: string[]
  BCC?: string[]
  body?: string
}

export interface ValidateConfig {
  title?: string
  description?: string
  requireComment?: boolean
  allowReject?: boolean
}

export interface SignConfig {
  title?: string
  documentUrl?: string
  requireName?: boolean
}

export interface GenerateConfig {
  title?: string
  description?: string
  template?: string
  showPreview?: boolean
  format?: 'pdf' | 'docx'
}

export interface NotifyConfig {
  title?: string
  recipients?: string[]
  type?: string
  message?: string
  immediate?: boolean
}

export interface Action {
  id: string
  step_id: string
  type: ActionType
  config: QuestionnaireConfig | EmailConfig | ValidateConfig | SignConfig | GenerateConfig | NotifyConfig
  order: number
  is_required: boolean
}

export interface Step {
  id: string
  workflow_id: string
  name: string
  description: string
  order: number
  isCompleted?: boolean
  completedActions?: string[]
  requiredActions?: Action[]
}

export interface ApiResponse {
  steps: Step[]
  action: Action
  message?: string
}
