<template lang="html">

  <div class="nc-edit">
    <editor-title :title="'Jobs'" />
    <line-editor :title="'Title'" v-model="titleText" @input="updateInput" />
    <div class="nc-edit__group">
      <button class="nc-edit__add-button" type="button" @click="addJob" >+New Job</button>
    </div>
    <div class="nc-edit__group" v-for="(job, index) in jobs">
      <job-editor class="nc-edit__group__left" v-model="jobs[index]" :editorId="'JobEditor-' + index" />
      <button class="nc-edit__group__right nc-edit__remove-button" type="button" @click="removeJob(index)" >X</button>
    </div>
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import LineEditor from './LineEditor.vue'
  import JobEditor from './JobEditor.vue'
  export default {
    components: {
      EditorTitle,
      LineEditor,
      JobEditor
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.titleText = newValue.titleText,
        this.jobs = newValue.jobs
      }
    },
    methods: {
      updateInput: function(value){
        this.$emit('input', {
          titleText: this.titleText,
          jobs: this.jobs
        })
      },
      addJob: function(){
        this.jobs.push({title:"",location:"",description:"",link:""})
      },
      removeJob: function(index){
        this.jobs.splice(index, 1)
      }
    },
    data: function(){
      return {
        titleText: this.value.titleText,
        jobs: this.value.jobs
      }
    },
    props: {
      value: {
        default: function(){
          return {
            titleText: "",
            jobs: []
          }
        },
        type:Object
      },
      editorId: {
        default: "JobsEditor",
        type:String
      }
    }
  }
</script>
