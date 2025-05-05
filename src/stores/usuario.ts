import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usuarioStore = defineStore('usuario', () => {
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
      usuarios.value = (await axios.get('usuario')).data
    } catch (e) {
      erro.value = (e as Error).message
    }
  }

  async function incluir() {
    try {
      await axios.post('usuario', { nome: nome.value, senha: senha.value })
      atualizar()
    } catch (e) {
      erro.value = (e as Error).message
    }
  }

  return { nome, senha, erro, usuarios, atualizar, incluir }
})
