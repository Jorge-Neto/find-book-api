import Book from "./models/Book";

export default {
  Query: {
    book: async (_, { isbn }) => {
      const book = await Book.findOne({ isbn });

      if (!book) {
        return {};
      }

      return book;
    },
    books: async () => {
      const books = await Book.find({});

      if (!books) {
        return {};
      }

      return books;
    },
  },

  Mutation: {
    createBook: async (_, { data }) => {
      const book = await Book.create(data);

      return book;
    },

    updateBook: async (_, { isbn, data }) => {
      const book = await Book.findOne({ isbn });

      if (!book) {
        return false;
      }

      await book.updateOne(data);

      return true;
    },

    deleteBook: async (_, { isbn }) => {
      const book = await Book.findOne({ isbn });

      if (!book) {
        return false;
      }

      await book.deleteOne();

      return true;
    },
  },
};
