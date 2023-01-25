export interface Formation {
  id?: number,
  title: string,
  start: string,
  duration: number,
  trainer: Trainer,
  categories: string[]
}

export interface Trainer {
  firstname: string,
  lastname: string
}
