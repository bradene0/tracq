// exerciseService.js

import supabase from './supabase/supabase';

// Function to insert exercise data
export async function addExercise(userId, date, minutes) {
  try {
    const { data, error } = await supabase
      .from('exercises')
      .insert([{ user_id: userId, date, minutes }]);
      
    if (error) {
      throw new Error(error.message);
    }
    
    return data;
  } catch (error) {
    console.error('Error adding exercise:', error);
    throw error;
  }
}
