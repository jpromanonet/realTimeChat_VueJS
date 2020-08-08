<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="login" class="text-center"></form>
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            placeholder="Please, enter your name"
          />
          <p v-if="errorText" class="text-danger">
            {{ errorText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
