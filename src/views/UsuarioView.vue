<template>
  <div>
    <p>{{ nome }}</p>
    <p><input type="text" :value="nome" /></p>
    <p><input type="text" id="nome" v-model="nome" /></p>
    <p><input type="password" id="senha" v-model="senha" /></p>
    <p v-if="senha.length < 5">Senha muito curta!</p>
    <div v-else>Senha ok!</div>
    <button @click="incluir">Incluir</button>

    <table>
      <thead>
        <th>Nome</th>
        <th>Senha</th>
      </thead>
      <tbody>
        <tr v-for="(usuario, index) in usuarios" :key="index">
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.senha }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const nome = ref<string>('teste')
const senha = ref<string>('')

const usuarios = ref([
  { nome: 'teste', senha: '123' },
  { nome: 'teste2', senha: '123' },
])

function incluir() {
  usuarios.value.push({ nome: nome.value, senha: senha.value })
}
</script>
