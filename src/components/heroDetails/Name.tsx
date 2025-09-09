interface NameProps {
  name: string;
  fullName: string;
};

export default function Name({ name, fullName }: NameProps) {
  return (
    <div className="w-full text-center mb-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-amber-100">
        {name}
      </h1>
      <p className="text-lg  mt-1">{fullName}</p>
    </div>
  );
}
