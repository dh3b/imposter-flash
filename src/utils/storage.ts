import { Category } from "@/types/game";
import defaultCategories from "../data/default-categories.json";

const STORAGE_KEY = "impostor_categories";

export const getDefaultCategories = (): Category[] => defaultCategories as Category[];

export const loadCategories = (): Category[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading categories:", error);
  }
  const defaults = getDefaultCategories();
  saveCategories(defaults);
  return defaults;
};

export const saveCategories = (categories: Category[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  } catch (error) {
    console.error("Error saving categories:", error);
  }
};

export const addCategory = (category: Category): Category[] => {
  const categories = loadCategories();
  categories.push(category);
  saveCategories(categories);
  return categories;
};

export const updateCategory = (updatedCategory: Category): Category[] => {
  const categories = loadCategories();
  const index = categories.findIndex((c) => c.id === updatedCategory.id);
  if (index !== -1) {
    categories[index] = updatedCategory;
    saveCategories(categories);
  }
  return categories;
};

export const deleteCategory = (id: string): Category[] => {
  const categories = loadCategories().filter((c) => c.id !== id);
  saveCategories(categories);
  return categories;
};

export const toggleCategory = (id: string): Category[] => {
  const categories = loadCategories();
  const category = categories.find((c) => c.id === id);
  if (category) {
    category.enabled = !category.enabled;
    saveCategories(categories);
  }
  return categories;
};
