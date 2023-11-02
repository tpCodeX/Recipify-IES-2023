interface CopyToClipboardButtonProps {
  url: string;
}

const CopyToClipboardButton = ({ url }: CopyToClipboardButtonProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(url)
      .then(() => alert('¡Enlace copiado al portapapeles!'))
      .catch(err => console.error('Error al copiar al portapapeles: ', err));
  };

  return (
    <button onClick={copyToClipboard}>Copiar enlace al portapapeles</button>
  );
};

export default CopyToClipboardButton; 