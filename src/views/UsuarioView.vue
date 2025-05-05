<template>
  <div>
    <p>{{ store.nome }}</p>
    <p><input type="text" :value="store.nome" /></p>
    <p><input type="text" id="nome" v-model="store.nome" /></p>
    <p><input type="password" id="senha" v-model="store.senha" /></p>
    <p v-if="store.senha.length < 5">Senha muito curta!</p>
    <div v-else>Senha ok!</div>
    <p v-if="store.erro">{{ store.erro }}</p>
    <button @click="store.atualizar">Atualizar</button>
    <button @click="store.incluir">Incluir</button>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Senha</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(usuario, index) in store.usuarios" :key="index">
          <td>{{ usuario.nome }}</td>
          <td>{{ usuario.senha }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { usuarioStore } from '@/stores/usuario'

const store = usuarioStore()

onMounted(() => {
  store.atualizar()
})
</script>
