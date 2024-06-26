function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "")
  if (cpf.length !== 11) return false
  let soma = 0
  let resto
  if (cpf === "00000000000") return false
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpf.substring(9, 10))) return false
  soma = 0
  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)
  resto = (soma * 10) % 11
  if (resto === 10 || resto === 11) resto = 0
  if (resto !== parseInt(cpf.substring(10, 11))) return false
  return true
}

document.getElementById("ctrl-cpf").addEventListener("blur", function () {
  const cpfDigitado = this.value
  if (!validarCPF(cpfDigitado)) {
    alert("CPF inválido")
    this.value = ""
  }
})
