export interface SearchItem {
  id: string;
  title: string;
  type: 'file' | 'website' | 'setting' | 'theme';
  shortcut?: string;
  icon?: string;
  onClick?: () => void;
}

export const initialSearchData: SearchItem[] = [
  {
    id: '1',
    title: 'New File',
    type: 'file',
    shortcut: '⌘N',
    onClick: () => {
      console.log('Creating new file...');
      // Add your new file creation logic here
    }
  },
  {
    id: '2',
    title: 'Visit Website',
    type: 'website',
    onClick: () => {
      window.open('https://your-website.com', '_blank');
    }
  },
  {
    id: '3',
    title: 'Settings',
    type: 'setting',
    shortcut: '⌘,',
    onClick: () => {
      console.log('Opening settings...');
      // Add your settings navigation logic here
    }
  },
  {
    id: '4',
    title: 'Light Mode',
    type: 'theme',
    onClick: () => {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  },
  {
    id: '5',
    title: 'Dark Mode',
    type: 'theme',
    onClick: () => {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  },
  {
    id: '6',
    title: 'System',
    type: 'theme',
    onClick: () => {
      localStorage.removeItem('theme');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  },
];
