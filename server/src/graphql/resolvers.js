import Todo from '../mongodb/schema';

const resolvers = {
  Query: {
    getTodos: () => {
      return new Promise((resolve, reject) => {
        // eslint-disable-next-line array-callback-return
        Todo.find((err, todos) => {
          if (err) reject(err);
          else resolve(todos);
        });
      });
    },
  },
  Mutation: {
    createTodo: (_, { label }) => {
      const newTodo = new Todo({
        label,
        created: new Date(),
      });

      newTodo.id = newTodo._id;

      return new Promise((resolve, reject) => {
        newTodo.save((err) => {
          if (err) reject(err);
          else resolve(newTodo);
        });
      });
    },
    deleteTodo: (_, { id }) => {
      return new Promise((resolve, reject) => {
        Todo.findOneAndDelete({ id }, (err, deleteTodo) => {
          if (err) reject(err);
          else resolve(deleteTodo);
        });
      });
    },
  },
};

export default resolvers;
