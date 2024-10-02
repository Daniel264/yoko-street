interface ButtonProps {
    text: string;
    bgColor: string;
}

export const Button = ({ text, bgColor }: ButtonProps) => {
    return <button className={`w-[17rem] rounded-lg px-5 py-3 bg-${bgColor} text-white`}>{text}</button>;
};
