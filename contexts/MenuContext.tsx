import { ReactNode, createContext, useContext, useState } from 'react';

const MenuContext = createContext({
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
});

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <MenuContext.Provider value={{ isOpen, handleOpen, handleClose }}>
      {children}
    </MenuContext.Provider>
  );
};

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}
