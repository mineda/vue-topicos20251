<template>
  <div>
    <p>{{ nome }}</p>
    <p><input type="text" :value="nome" /></p>
    <p><input type="text" id="nome" v-model="nome" /></p>
    <p><input type="password" id="senha" v-model="senha" /></p>
    <p v-if="senha.length < 5">Senha muito curta!</p>
    <div v-else>Senha ok!</div>
    <p v-if="erro">{{ erro }}</p>
    <button @click="atualizar">Atualizar</button>
    <button @click="incluir">Incluir</button>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Senha</th>
        </tr>
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
import axios from 'axios'
import { onMounted } from 'vue'

const nome = ref<string>('teste')
const senha = ref<string>('')
const erro = ref<string>('')

interface usuario {
  id?: number
  nome: string
  senha: string
}

const usuarios = ref<usuario[]>([
  { nome: 'teste', senha: '123' },
  { nome: 'teste2', senha: '123' },
])

async function atualizar() {
  try {
    usuarios.value = (
      await axios.get(
        'https://reimagined-space-pancake-jp5v55p5wqhp477-8080.app.github.dev/usuario',
      )
    ).data
  } catch (e) {
    erro.value = (e as Error).message
  }
}

async function incluir() {
  try {
    await axios.post(
      'https://reimagined-space-pancake-jp5v55p5wqhp477-8080.app.github.dev/usuario',
      { nome: nome.value, senha: senha.value },
    )
    atualizar()
  } catch (e) {
    erro.value = (e as Error).message
  }
}

onMounted(() => {
  atualizar()
})
</script>
