import { useRef, useState } from 'react';
import { types } from 'src/components/FileDropper/types/iconTypes';
import { FileDropper } from '../../components/FileDropper';

interface Props {
  maxFiles?: number;
  maxSize?: number;
  type?: types;
  hasError: boolean;
  warning: boolean;
  errorMessage: string;
  onDrop: (arg0: any) => void;
  onChange: (event: any) => void;
  onChangeProgress: (progressChange: boolean) => void;
  progressChange?: boolean;
  isDisabled: boolean;

  uploadedFileName?: string;
  uploadedFileSize?: string;
  uploadedFileDuration?: string;
}

interface PropsUploadFile {
  name: string;
  size: number;
  duration: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const FileDropperExample = (props: Props) => {
  const {
    isDisabled,
    errorMessage,
    hasError,
    onChange,
    onChangeProgress,
    onDrop,
    warning,
    maxFiles,
    maxSize,
    progressChange = true,
    type,
    uploadedFileDuration,
    uploadedFileName,
    uploadedFileSize,
  } = props;

  const fileRef = useRef<PropsUploadFile>();
  const [fileState, setFileState] = useState<PropsUploadFile | null>(null); // Inicializar state

  const handleFileAttributes = (fileData: PropsUploadFile) => {
    if (
      fileState === null ||
      fileData.name !== fileState.name ||
      fileData.size !== fileState.size ||
      fileData.duration?.hours !== fileState?.duration?.hours ||
      fileData.duration?.minutes !== fileState?.duration?.minutes ||
      fileData.duration?.seconds !== fileState?.duration?.seconds
    ) {
      fileRef.current = fileData;
      setFileState(fileData);
    }
  };

  return (
    <FileDropper
      onChangeProgress={onChangeProgress}
      progressChange={progressChange}
      type={type}
      isDisabled={isDisabled}
      errorMessage={errorMessage}
      hasError={hasError}
      warning={warning}
      onDrop={onDrop}
      maxFiles={maxFiles}
      maxSize={maxSize}
      onChange={onChange}
      uploadedFileDuration={uploadedFileDuration}
      uploadedFileName={uploadedFileName}
      uploadedFileSize={uploadedFileSize}
      setFileAttributes={handleFileAttributes}
    />
  );
};

export default FileDropperExample;
