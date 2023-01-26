export interface Alert {
  message: string,
  level: AlertLevel,
  duration: AlertDuration,
  closable: boolean
}

export type AlertDuration =  3000 | 5000 | 8000 | 0;
export type AlertLevel = 'error' | 'success' | 'info';
