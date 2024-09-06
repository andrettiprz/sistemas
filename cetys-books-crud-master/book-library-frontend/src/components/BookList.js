import React, { useState } from "react";

function BookList({ books, deleteBook, updateBook }) {
  const [isEditing, setIsEditing] = useState(null); // Estado para el ID del libro que está siendo editado
  const [editedBook, setEditedBook] = useState({ title: "", author: "" }); // Estado para almacenar el libro editado

  const handleEditClick = (book) => {
    setIsEditing(book.id); // Establece el ID del libro que se está editando
    setEditedBook({ title: book.title, author: book.author }); // Rellena los campos del formulario con los datos actuales del libro
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value }); // Actualiza los campos del formulario conforme el usuario escribe
  };

  const handleUpdate = () => {
    updateBook(isEditing, editedBook); // Llama a la función de actualización con el ID y los datos del libro
    setIsEditing(null); // Reinicia el estado de edición
  };

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {isEditing === book.id ? (
            <>
              {/* Formulario de edición */}
              <input
                type="text"
                name="title"
                value={editedBook.title}
                onChange={handleInputChange}
                placeholder="Title"
              />
              <input
                type="text"
                name="author"
                value={editedBook.author}
                onChange={handleInputChange}
                placeholder="Author"
              />
              <button onClick={handleUpdate}>Guardar</button>
              <button onClick={() => setIsEditing(null)}>Cancelar</button>
            </>
          ) : (
            <>
              {/* Mostrar detalles del libro */}
              {book.title} by {book.author}
              <button onClick={() => deleteBook(book.id)}>Eliminar</button>
              <button onClick={() => handleEditClick(book)}>Editar</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BookList;