<script setup>
import useStore from "../state/state";

const { products, addProduct } = useStore();

const addProd = () => {
  const name = document.getElementById("name")
  const price = document.getElementById("price")
  if (name.value === "") {
    name.value = ""
    name.placeholder = "Cannot be empty"
    return
  }
  if (name.value.length > 30) {
    name.value = ""
    name.placeholder = "Max 30 characters"
    return
  }
  if (price.value === "") {
    price.value = ""
    price.placeholder = "Cannot be empty"
    return
  }
  if (isNaN(price.value)) {
    price.value = ""
    price.placeholder = "Must be a number"
    return
  }
  if (!(price.value > 0 && price.value < 1000000)) {
    price.value = ""
    price.placeholder = "Must be in (0; 1000000)"
    return
  }
  addProduct(name.value, price.value);
  window.location.reload();
};
</script>

<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop="">
        <div class="modal-header">
          <span class="modal-title">Add a product</span>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>
        <div class="modal-body">
          <label for="name" class="labels">Name</label>
          <input id="name" class="inputs" required><br>
          <label for="price" class="labels">Price</label>
          <input id="price" class="inputs" required><br>
          <button id="confirm" @click="addProd()">Add</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">

.modal__wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  background-color: rgba(00,00,00,.48);
}
.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
  overflow: hidden;
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button-close {
    cursor: pointer;
  }
}
.modal-body {
  text-align: center;
  padding: 20px;
}
.modal-bottom {
  padding-top: 40px;
}

.inputs {
  margin: 10px;
  padding: 5px;
  border: solid black 1px;
  font-size: larger;
  border-radius: 5px;
}

.labels {
  font-size: larger;
}

#confirm {
  margin: 10px;
  padding: 10px 20px;
  background: #22c55e;
  font-weight: bold;
  border-radius: 5px;
  font-size: larger;
}
</style>