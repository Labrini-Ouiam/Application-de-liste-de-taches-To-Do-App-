import { Injectable } from '@angular/core';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: TodoItem[] = [];
  private nextId = 1;

  getTodos(): TodoItem[] {
    return [...this.todos]; // Retourne une copie
  }

  addTodo(title: string): void {
    this.todos.push({
      id: this.nextId++,
      title: title.trim(),
      completed: false
    });
  }

  toggleTodo(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
