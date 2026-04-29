interface ContactInfoBannerProps {
    message: string;
    phone?: string;
    className?: string;
    textClassName?: string;
    phoneClassName?: string;
}

export const ContactInfoBanner = ({
    message,
    phone = "956-08-28",
    className = "mt-6 p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl text-center",
    textClassName = "text-gray-600 text-sm",
    phoneClassName = "text-gray-800",
}: ContactInfoBannerProps) => {
    return (
        <div className={className}>
            <p className={textClassName}>
                {`📞 ${message}: `}
                <strong className={phoneClassName}>{phone}</strong>
            </p>
        </div>
    );
};
