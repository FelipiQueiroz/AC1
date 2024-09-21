const express = require('express');
const app = express();
app.use(express.json());

// Dados fictícios para exemplificar
const cargos = [{ id: 1, nome: "Gerente" }, { id: 2, nome: "Desenvolvedor" }];
const setores = [{ id: 1, nome: "TI" }, { id: 2, nome: "RH" }];
const funcionarios = [
  { id: 1, nome: "João", cargoId: 1, setorId: 1 },
  { id: 2, nome: "Maria", cargoId: 2, setorId: 2 }
];

// a. Todos os cargos
app.get('/cargos', (req, res) => {
  res.json(cargos);
});

// b. Todos os setores
app.get('/setores', (req, res) => {
  res.json(setores);
});

// c. Todos os funcionários
app.get('/funcionarios', (req, res) => {
  res.json(funcionarios);
});

// d. Setor com o nome passado por querystring
app.get('/setor', (req, res) => {
  const nome = req.query.nome;
  const setor = setores.find(s => s.nome === nome);
  if (setor) {
    res.json(setor);
  } else {
    res.status(404).send('Setor não encontrado');
  }
});

// e. Funcionário com o parâmetro nome passado por :id
app.get('/funcionario/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const funcionario = funcionarios.find(f => f.id === id);
  if (funcionario) {
    res.json(funcionario);
  } else {
    res.status(404).send('Funcionário não encontrado');
  }
});

// f. Todos os funcionários do cargo passado no body da requisição
app.post('/funcionarios/cargo', (req, res) => {
  const { cargoId } = req.body;
  const funcionariosDoCargo = funcionarios.filter(f => f.cargoId === cargoId);
  res.json(funcionariosDoCargo);
});

// g. Todos os cargos que não possuem funcionário
app.get('/cargos/sem-funcionario', (req, res) => {
  const cargosSemFuncionario = cargos.filter(cargo => 
    !funcionarios.some(func => func.cargoId === cargo.id)
  );
  res.json(cargosSemFuncionario);
});

