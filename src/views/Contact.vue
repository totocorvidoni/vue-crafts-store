<template>
  <div class="contact-us">
    <div class="information">
      <h1>Contactanos!</h1>
      <p>Fames ac turpis egestas sed tempus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.</p>
      <p>Dolor sed viverra ipsum nunc aliquet bibendum.</p>
      <p>Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Aliquam vestibulum morbi blandit cursus risus. Nec feugiat nisl pretium fusce id velit.</p>
    </div>
    <form action="post" class="contact-form">
      <div class="field">
        <label for="name">Nombre</label>
        <input name="name" type="text">
      </div>
      <div class="field">
        <label for="email">Mail</label>
        <input name="email" type="email">
      </div>
      <div class="field">
        <label for="phone">Teléfono</label>
        <input name="phone" type="tel">
      </div>
      <div class="field">
        <label for="comment">Comentarios</label>
        <textarea name="comment" type="text"></textarea>
      </div>
      <input type="submit" value="Enviar" class="button" @click.prevent="onContactSubmit">
    </form>
  </div>
</template>

<script>
export default {
  name: "contact-us",
  methods: {
    onContactSubmit() {
      // Add post request once back-end implementacion is done.
    }
  }
};
</script>

<style lang="scss">
.contact-us {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2em;
  padding: 1em 2em;
  justify-content: center;
  // align-items: center;
  margin: 0 auto;

  .information {
    max-width: 450px;
    text-align: end;
    margin-top: 2em;
    h1 {
      color: $color1;
    }
    p {
      color: $color-dark-light;
      margin-bottom: 0.5em;
    }
  }

  .contact-form {
    display: grid;
    border-radius: 0.5em;
    max-width: 500px;

    .field {
      border-radius: 0.5em;
      margin: 0.5em auto;
      width: 100%;
    }

    label {
      display: block;
      color: $color1;
      margin-left: 1em;
    }

    input,
    textarea {
      border: 1px solid $color4-strong;
      border-radius: 0.5em;
      color: $color-dark-light;
      font-family: $font-title;
      font-size: 1.2em;
      padding: 5px 15px;
      transition: $quick-out;
      width: 100%;
      &:focus {
        outline: none;
        border-color: $color4;
      }
    }

    textarea {
      height: 150px;
    }

    input[type="submit"] {
      padding: 1em;
      background: $color4-strong;
      border: none;
      color: $color-light;
      font-weight: 700;
      text-transform: uppercase;
      font-family: $font-regular;
      width: 50%;
    }
  }
}
</style>
