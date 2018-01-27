<script>

import autosize from 'autosize'

export default {

  props: ['value', 'on_change'],

  template: `<textarea @input="handle_change"> {{ value }} </textarea>`,

  mounted() {
    autosize(this.$el)
  },

  watch: {
    value: function(val) {
      this.$el.value = val;
      autosize.update(this.$el)
    }
  },

  methods: {
    handle_change(e) {
      if (this.on_change) {
        this.on_change(e.target.value)
      } else {
        this.$emit('input', e.target.value)
      }
    }
  }

}

</script>
