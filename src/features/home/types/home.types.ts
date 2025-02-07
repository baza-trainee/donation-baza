export interface IEvent {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface IInstruction {
  icon: string;
  description: string;
  isVisible?: boolean;
}

export interface IQuestion {
  questionNumber: string;
  title: string;
  answer: string;
}
