export type Form = {
  breakfast: string;
  lunch: string;
  dinner: string;
  snacks: string;
};
export interface UserSettings {
  form: Form;
  daily_kcal: number;
}
