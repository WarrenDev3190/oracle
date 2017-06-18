<template lang="html">

  <div class="nc-edit">
      <div class="nc-edit__subtitle">{{title}}</div>
      <div class="nc-edit__pills nc-edit__component">
        <div class="nc-edit__pills__box">
          <draggable class="nc-draggable" :list="groups" :options="{animation: '150'}" @end="updateOrder">
            <div class="nc-edit__pills__pill" v-for="(group, index) in groups" @click="selectGroup(index)">
              <div class="nc-edit__pills__pill__title">{{group.title}}</div>
              <button class="nc-edit__pills__pill__button" type="button" @click="removeGroup(index)">X</button>
            </div>
          </draggable>
        </div>
        <button class="nc-edit__pills__side-button nc-edit__add-button" type="button" @click="addGroup">+New Group</button>
      </div>
      <line-editor v-if="selectedIndex != null" v-model="groups[selectedIndex].title" :title="'Group Title'" />
  </div>

</template>
<script type="text/javascript">
  import EditorTitle from './EditorTitle.vue'
  import LineEditor from './LineEditor.vue'
  import draggable from 'vuedraggable'
  export default {
    components: {
      EditorTitle,
      LineEditor,
      draggable
    },
    computed: {
    },
    watch:{
      value(newValue){
        this.groups = newValue
      }
    },
    methods: {
      updateOrder: function(dragObj){
        if(dragObj.oldIndex == this.selectedIndex){
          this.selectGroup(dragObj.newIndex)
        }
        else if(dragObj.oldIndex > this.selectedIndex && dragObj.newIndex < this.selectedIndex){
          this.selectGroup(this.selectedIndex + 1)
        }
      },
      updateInput: function(value){
        this.$emit('input', {
          groups: this.groups
        })
      },
      removeGroup: function(index){
        //If we delete the last one, null the selection
        if(this.groups.length - 1 == 0){
          this.selectGroup(null)
        }
        //If we delete one behind our selection, maintain our selection
        else if(this.selectedIndex > index){
          this.selectGroup(this.selectedIndex - 1)
        }
        //If we delete our selection and it is the last in the list, reduce the selection
        else if(this.selectedIndex == index && this.groups.length - 1 <= this.selectedIndex){
          this.selectGroup(this.selectedIndex - 1)
        }
        this.groups.splice(index, 1)
        event.stopPropagation();
      },
      addGroup: function(){
        this.groups.push({title:"New Group", articles:[]})
        this.selectGroup(this.groups.length - 1)
      },
      selectGroup: function(index){
        this.selectedIndex = index
        this.$emit('groupselected', index)
      }
    },
    data: function(){
      return {
        groups: this.value,
        selectedIndex: null
      }
    },
    props: {
      value: {
        default: function(){
          return []
        },
        type: Array
      },
      title: {
        default: "",
        type: String
      },
      editorId: {
        default: "TitleGroupsEditor",
        type: String
      }
    }
  }
</script>
