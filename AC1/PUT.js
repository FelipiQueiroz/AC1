// Atualizar Funcionário
app.put('/funcionario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = funcionarios.findIndex(f => f.id === id);
    
    if (index !== -1) {
      funcionarios[index] = { ...funcionarios[index], ...req.body };
      res.json(funcionarios[index]);
    } else {
      res.status(404).send('Funcionário não encontrado');
    }
  });
  