// 'use strict';

var cat = 'Tom';

function f1() {
  var cat = 'Félix';
}

function f2() {
  cat = 'Garfield';
  dog = 'Beethoven';
}

f1();
f2();

// --------------------------------------
// COMPILER - SCOPE MANAGERS CONVERSATION
// --------------------------------------

// Lexical Scope
// Formal decorations: decorations (variable decoration, function decoration)
// Informal decorations:

// 1) Compiler
// Hey Global Scope Manager, I have found a formal decoration for 'cat';
// have you ever heard of it? This is very IMPORTANT!
// var cat;

// 2) Scope Manager
// No, I haven't. Let me register this variable in the global scope

// 3) Compiler
// Hey Global Scope Manager, I have an identifier called 'f1'; have you ever heard of it?
// f1

// 4) Scope Manager
// No, I haven't. Let me register this identifier in the global scope.
// Oh but this identifier happens to reference a function decoration, this function needs its own scope
// Let create a new scope for this function

// 5) Compiler
// Hi scope of "f1", I have found a formal decoration for 'cat'; have you ever heard of it?

// 6) Scope Manager for "f1"
// No, I haven't. Let me register this variable in the "f1" scope

// BTW, the "term" for two variables in with the same name in different scopes: "Variable shadowing"

// 7) Compiler
// Hey Global Scope Manager, I have an identifier called 'f2'; have you ever heard of it?
// f2

// 8) Scope Manager
// No, I haven't. Let me register this identifier in the global scope.
// Oh but this identifier happens to reference a function decoration, this function needs its own scope
// Let create a new scope for this function

// 9) Compiler
// Hey Scope Manager for "f2", I have an identifier called 'cat'; have you ever heard of it?
// (parameters are formal decorations too)
// cat

// 10) Scope Manager for "f2"
// No, I haven't. Let me register this identifier in the scope of "f2".

// 11) Compiler
// Nothing happens because the "dog" variable could be declared anywhere!!!

// -------------------------------------------------------
// COMPILER METADATA +
// JAVASCRIPT RUNTIME ENGINE - SCOPE MANAGERS CONVERSATION
// -------------------------------------------------------

// https://en.wikipedia.org/wiki/Sides_of_an_equation
// LHS look-up is done when a variable appears on the left-hand side of an assignment operation,
// and an RHS look-up is done when a variable appears on the right-hand side of an assignment operation.
// lhs lookup is a container lookup (target)
// rhs lookup is a value lookup (source)

// Let's execute this code!
// Declarations, we don't mind anymore!

// 1) Engine
// Hey Global Scope Manager, I have an LHS reference for a variable called "cat"; have you ever heard of it?

// 2) Global Scope Manager
// Yes, I have, here is your "marble" / "apple" (location in memory)
// The engine makes the assignment, etc.

// 3) Engine
// Hey Scope Manager of "f1", I have an LHS reference for a variable called "cat"; have you ever heard of it?

// 4) "f1" Scope Manager
// Yes, I have, here is your "marble" / "apple" (location in memory)
// The engine makes the assignment, etc.

// 5) Engine
// Hey Scope Manager of "f2", I have an LHS reference for a variable called "cat"; have you ever heard of it?

// 6) "f2" Scope Manager
// Yes, I have, here is your "marble" / "apple" (location in memory)
// The engine makes the assignment, etc.

// 7) Engine
// Hey Scope Manager of "f2", I have an LHS reference for a variable called "dog"; have you ever heard of it?

// 8) "f2" Scope Manager
// No, I haven't, I have no idea where is it

// The lexical scope comes into play (lexical scopes are nested)!!!
// 9) Engine
// Ok, let me go back in the scope to try to find it
// Hey Global Scope Manager, I have an LHS reference for a variable called "dog"; have you ever heard of it?

// 10) Global Scope Manager
// No, I haven't. But I will create it for you :P

// 11) Human
// Wait... whaaaaaat!!!
