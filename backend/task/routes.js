import express from 'express';
const router = express.Router();

import Task from './models.js';

router.get('/', async(req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch(error) {
    res.send(error);
  }
});

router.post('/', (req, res) => {
  const task = new Task({
    title: req.body.title
  });
  task.save().then(result => {
    res.status(200).json({
      message: "Task Added Successfully"
    });
  }).catch(error => {
    res.status(401).json({
      message: "Error Adding Task" + error.message
    });
  });
});

router.put('/update/:id', (req, res) => {
  const newTask = {
    title: req.body.title
  }
  Task.updateOne({ _id: req.params.id }, { $set: newTask }).then(result => {
    res.status(202).json({
      message: "Task Updated Successfully"
    });
  }).catch(error => {
    res.status(401).json({
      message: "Error Updating Task" + error.message
    });
  });
});

router.put('/done/:id', (req, res) => {
  const newTask = {
    isDone: true
  }
  Task.updateOne({ _id: req.params.id }, { $set: newTask }).then(result => {
    res.status(202).json({
      message: "Task Done"
    });
  }).catch(error => {
    res.status(401).json({
      message: "Error" + error.message
    });
  });
});

router.post('/delete/:id', (req, res) => {
  Task.deleteOne({ _id: req.params.id }).then(result => {
    res.status(202).json({
      message: "Task Deleted Successfully"
    });
  }).catch(error => {
    res.status(401).json({
      message: "Error Deleting Task" + error.message
    });
  });
});

export default router;
