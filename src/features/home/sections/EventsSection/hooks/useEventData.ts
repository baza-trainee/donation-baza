'use client';

import { AbstractIntlMessages, useMessages, useTranslations } from 'next-intl';
import { IEvent } from '@/features/home/types/home.types';
import { useWindowWidth } from '@/features/home/hooks/useWindowWidth';

type EventsMessages = AbstractIntlMessages & {
  homepage: {
    eventsSection: {
      events: Record<
        string,
        {
          title: string;
          description: string;
          image: string;
          imageAlt: string;
        }
      >;
    };
  };
};

export const useEventsData = () => {
  const screenWidth = useWindowWidth();
  const getImageSize = () => (screenWidth <= 560 ? 'small' : 'large');
  const translations = useTranslations('homepage.eventsSection');
  const title = translations('title');
  const subtitle = translations('subtitle');
  const buttonText = translations('buttonText');
  const messages = useMessages() as EventsMessages;
  const keys = Object.keys(messages?.homepage?.eventsSection?.events ?? {});
  const events: IEvent[] = keys.map((event) => ({
    title: translations(`events.${event}.title`),
    description: translations(`events.${event}.description`),
    image: translations(`events.${event}.image.${getImageSize()}`),
    imageAlt: translations(`events.${event}.imageAlt`),
  }));

  return { events, title, subtitle, buttonText };
};
