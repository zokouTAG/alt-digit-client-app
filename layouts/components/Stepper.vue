<script setup lang="ts">
const goToNextStep = () => {
    // Add navigation logic here
}

const goToPreviousStep = () => {

}
</script>



<template>
    <footer class="footer text-center text-sm-start d-print-none">
        <div class="container-xxl">
            <b-row>
                <b-col cols="12">
                    <b-card no-body class="mb-0 rounded-bottom-0 mx-5">
                        <b-card-body class="mx-5">
                            <p class="text-muted mb-0">
                                <b-button variant="outline-primary">
                                    <i class="la la-angle-left"></i> Précédent
                                </b-button>
                                <span class="text-muted d-none d-sm-inline-block float-end">
                                    <b-button variant="primary">
                                        Suivant <i class="la la-angle-right"></i>
                                    </b-button></span>
                            </p>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </div>
    </footer>
</template>
