function enviarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const dtNasc = document.getElementById('dtNasc').value;
    const sexo = document.getElementById('sexo').value;
    const logradouro = document.getElementById('logradouro').value;
    const numRG = document.getElementById('numRG').value;
    const complemento = document.getElementById('complemento').value;
    const bairro = document.getElementById('bairro').value;
    const localidade = document.getElementById('localidade').value;
    const CPF = document.getElementById('CPF').value;
    const CNH = document.getElementById('CNH').value;
    const NIS = document.getElementById('NIS').value;
    const cert_Reser = document.getElementById('cert_Reser').value;
    const titulo_Eleit = document.getElementById('titulo_Eleit').value;
    const num = document.getElementById('num').value;
    const UF = document.getElementById('UF').value;
    const dtExp = document.getElementById('dtExp').value;
    window.location.href = `Nome.html?nome=${nome}`;
    window.location.href = `Email.html?nome=${email}`;
    window.location.href = `Telefone.html?nome=${telefone}`;
    window.location.href = `DtNasc.html?nome=${dtNasc}`;
    window.location.href = `Sexo.html?nome=${sexo}`;
    window.location.href = `Logradouro.html?nome=${logradouro}`;
    window.location.href = `NumRG.html?nome=${numRG}`;
    window.location.href = `Complemento.html?nome=${complemento}`;
    window.location.href = `Bairro.html?nome=${bairro}`;
    window.location.href = `Localidade.html?nome=${localidade}`;
    window.location.href = `_CPF.html?nome=${CPF}`;
    window.location.href = `_CNH.html?nome=${CNH}`;
    window.location.href = `_NIS.html?nome=${NIS}`;
    window.location.href = `Cert_Reser.html?nome=${cert_Reser}`;
    window.location.href = `Titulo_Eleit.html?nome=${titulo_Eleit}`;
    window.location.href = `Num.html?nome=${num}`;
    window.location.href = `_UF.html?nome=${UF}`;
    window.location.href = `DtExp.html?nome=${dtExp}`;
}