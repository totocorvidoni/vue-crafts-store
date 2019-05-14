<template>
  <div>
    <p>This is the contact.</p>
    <form action="post" class="contact-form">
      <label for="name">Nombre</label>
      <input name="name" type="text">
      <label for="email">Mail</label>
      <input name="email" type="email">
      <label for="phone">Teléfono</label>
      <input name="phone" type="tel">
      <label for="comment">Comentarios</label>
      <textarea name="comment" type="text"> </textarea>
      <input type="submit" value="Enviar">
    </form>
    </div>
</template>

<script>
export default {
  name: 'contact-us'
  
}
</script>

<style lang="scss">
  .contact-form {
    display: grid;
    width: 500px;
  }
</style>
