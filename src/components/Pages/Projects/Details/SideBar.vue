<!-- <template>
    <div class="project-sidebar">
        <div class="row">
            <div class="col-md-7">
                <img class="img-sidebar" src="@/assets/img/projects/project-sidebar.webp" alt="project sidebar">
            </div>
            <div class="col-md-5">
                <h3>Level One</h3>
                <h6>The Prerequisites</h6>
            </div>
            <p class="mb-4">Let's first confirm that you have the strength to begin your Laravel journey. A basic
                understanding of PHP, object-oriented programming, and database management are essential prerequisites.
            </p>
            <h6> Things You'll Learn </h6>
            <ul>
                <li>
                    <i class="fa-solid fa-check" style="color: #fff;"></i>
                    <span>Database Access</span>
                </li>
                <li>
                    <i class="fa-solid fa-check" style="color: #fff;"></i>

                    <span>Object-Oriented Programming</span>
                </li>
                <li>
                    <i class="fa-solid fa-check" style="color: #fff;"></i>
                    <span>Database Access</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
}
</script> -->
<template>
    <div class="project-sidebar">
        <div class="timeline-container">
            <!-- Timeline navigation -->
            <div class="timeline-nav" :class="[isArabic ? 'ar' : 'en']">
                <div v-for="(stage, index) in projectStages" :key="index" class="timeline-item"
                    :class="{ 'active': currentStage === index }" @click="selectStage(index)">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h4>{{ stage.title }}</h4>
                    </div>
                </div>
            </div>

            <!-- Stage details -->
            <div class="stage-details">
                <div class="stage-image">
                    <img :src="currentStageData.image" :alt="currentStageData.title">
                </div>
                <div class="stage-info">
                    <h3>{{ currentStageData.title }}</h3>
                    <h6>{{ currentStageData.subtitle }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/fontawesome/css/fontawesome.css'
import '@/assets/fontawesome/css/brands.css'
import '@/assets/fontawesome/css/solid.css'
export default {
    data() {
        return {
            currentStage: 0,
            projectStages: [
                {
                    title: "Level One",
                    subtitle: "The Prerequisites 1",
                    image: require("@/assets/img/projects/project-sidebar.webp"),
                },
                {
                    title: "Level Two",
                    subtitle: "The Prerequisites 2",
                    image: require("@/assets/img/projects/project-sidebar.webp"),
                },
                {
                    title: "Level three",
                    subtitle: "The Prerequisites 3",
                    image: require("@/assets/img/projects/project-sidebar.webp"),
                },
            ]
        };
    },
    computed: {
        currentStageData() {
            return this.projectStages[this.currentStage];
        },
        isArabic() {
            return this.$i18n.locale === 'ar';
        }
    },
    methods: {
        selectStage(index) {
            this.currentStage = index;
        }
    },

}
</script>

<style lang="scss" scoped>
.timeline-container {
    display: flex;
    gap: 1rem;
}

.timeline-nav {
    flex: 0 0 160px;
    position: relative;
}

.timeline-item {
    position: relative;
    padding: 1rem;
    cursor: pointer;
    margin-bottom: .3rem;
    display: flex;
    align-items: center;

    &:not(:last-child) {
        &::after {
            content: "";
            position: absolute;
            height: 105%;
            width: 3px;
            background-color: #ccc;
            bottom: -50%;
            left: -1px;
            z-index: 1;
        }
    }
}

.timeline-marker {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ccc;
    position: absolute;
    left: -6px;
    z-index: 2;
}

.timeline-nav.ar {
    .timeline-item {
        &::after {
            right: -1px;
            left: auto;
        }
    }

    .timeline-marker {
        left: auto;
        right: -6px;
    }
}

.timeline-item.active .timeline-marker {
    background: #328af1;
}

.stage-details {
    flex: 1;
}

@media (max-width: 768px) {
    .timeline-container {
        flex-direction: column;
    }

    .timeline-nav {
        flex: none;
        display: flex;
        overflow-x: auto;
        margin-bottom: 1rem;
    }
}
</style>