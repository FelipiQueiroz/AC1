// a. Inserir Funcionário
app.post('/funcionario', (req, res) => {
    const novoFuncionario = req.body;
    novoFuncionario.id = funcionarios.length + 1;
    funcionarios.push(novoFuncionario);
    res.status(201).json(novoFuncionario);
  });
  