// Excluir Funcionário
app.delete('/funcionario/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = funcionarios.findIndex(f => f.id === id);
    
    if (index !== -1) {
      funcionarios.splice(index, 1);
      res.status(204).send();
    } else {
      res.status(404).send('Funcionário não encontrado');
    }
  });
  