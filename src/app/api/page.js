
'use client'
import { useState } from "react";
export const getPosts1 = async() => {
   const response1 = await fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'GET',
   });

   return response1.json();
}

export const getPosts2 = async() => {
   const response2 = await fetch('https://jsonplaceholder.typicode.com/users',{
      method: 'GET',
   });

   return response2.json();
}