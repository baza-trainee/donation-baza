import { IButton } from '@/components/ui/Button';

export interface IPaymentButton extends IButton {
  value: string;
  label: string;
}