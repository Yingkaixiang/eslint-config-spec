<template>
  <div>
    <div
      v-for="item in list"
      :key="item.key" class="bar"
    >
      222
    </div>
  </div>
</template>

<script>
export default {
  props: {
    a: {
      type: String,
      required: true,
    },
  },

  methods: {
    handleClickFirstNumberAndOther() {
      console.log(123);
    },
  },
};
</script>
