<template>
  <div class="contact-us">
    <div class="information">
      <h1>Contactanos!</h1>
      <p>Fames ac turpis egestas sed tempus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida.</p>
      <p>Dolor sed viverra ipsum nunc aliquet bibendum.</p>
      <p>Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Aliquam vestibulum morbi blandit cursus risus. Nec feugiat nisl pretium fusce id velit.</p>
    </div>
    <transition name="fade" mode="out-in">
      <div class="sent" v-if="sent">
        <img src="@/assets/envelope-open-text-solid.svg" class="icon" />
        <h2>Mensaje Enviado!</h2>
        <p>Muchas gracias por comunicarte con nosotros.</p>
        <p>En breve nos vamos a estar poniendo en contacto</p>
        <p>Que tengas lindo día</p>
      </div>
      <form v-else action="post" class="contact-form">
        <div class="field">
          <label for="name">Nombre</label>
          <input name="name" type="text" />
        </div>
        <div class="field">
          <label for="email">Mail</label>
          <input name="email" type="email" />
        </div>
        <div class="field">
          <label for="phone">Teléfono</label>
          <input name="phone" type="tel" />
        </div>
        <div class="field">
          <label for="comment">Comentarios</label>
          <textarea name="comment" type="text"></textarea>
        </div>
        <input type="submit" value="Enviar" class="button" @click.prevent="onContactSubmit" />
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: "contact-us",
  data() {
    return {
      sent: false
    };
  },

  methods: {
    onContactSubmit() {
      // Add post request once back-end implementation is done.
      this.sent = true;
    }
  }
};
</script>

<style lang="scss">
.contact-us {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  padding: 2em;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .information {
    max-width: 450px;
    text-align: end;
    h1 {
      color: $color1;
      margin: 0.5em 0;
    }
    p {
      color: $color-dark-light;
      margin-bottom: 0.5em;
    }
  }

  .sent {
    align-self: center;
    justify-self: center;
    text-align: center;

    h2 {
      color: $color1;
      margin: 1em;
    }

    p {
      margin: 1em;
    }

    .icon {
      width: 10rem;
      height: auto;
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

@media screen and (max-width: $narrow) {
  .contact-us {
    .contact-form {
      input[type="submit"] {
        width: 100%;
      }
    }
  }
}
</style>
