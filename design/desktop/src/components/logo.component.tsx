const Logo = ({ size = 128, ...props }: { size?: number }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 2500 2500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1251 333.389L191.01 1393.32C-62.1727 1646.49 -62.1725 2056.96 191.01 2310.12C444.193 2563.29 854.684 2563.29 1107.87 2310.12L1251 2167L1251 1546.17L801.302 1995.84C719.505 2077.63 586.885 2077.63 505.087 1995.84C423.29 1914.05 423.29 1781.44 505.087 1699.64L1251 953.773L1251 333.389Z"
                fill="#28ABF9"
            />
            <path d="M1251 2168.29L643.603 1560.69L954.574 1249.68L1251 1546.2V2168.29Z" fill="#793ACC" />
            <path
                d="M1250.67 332.398L1109.39 191.065C855.79 -62.6185 444.629 -62.618 191.033 191.065C-62.5634 444.748 -62.5639 856.049 191.033 1109.73L332.927 1251.68L643.899 940.663L505.845 802.562C423.914 720.603 423.914 587.721 505.845 505.762C587.776 423.803 720.613 423.803 802.544 505.762L1250.67 954.042V332.398Z"
                fill="#793ACC"
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1250.92 2166.61L2310.91 1106.68C2564.09 853.513 2564.09 443.045 2310.91 189.877C2057.72 -63.292 1647.23 -63.2923 1394.05 189.876L1250.92 333.001V953.831L1700.62 504.159C1782.41 422.366 1915.03 422.366 1996.83 504.159C2078.63 585.952 2078.63 718.564 1996.83 800.357L1250.92 1546.23V2166.61Z"
                fill="#3B88F4"
            />
            <path
                d="M1251 2168.04L1392.29 2309.37C1645.88 2563.05 2057.04 2563.05 2310.64 2309.37C2564.23 2055.69 2564.23 1644.38 2310.64 1390.7L2168.66 1248.68L1857.69 1559.69L1995.83 1697.87C2077.76 1779.83 2077.76 1912.71 1995.83 1994.67C1913.89 2076.63 1781.06 2076.63 1699.13 1994.67L1251 1546.39V2168.04Z"
                fill="#5515A6"
            />
            <path d="M1250.67 332.389L1857.98 939.911L1547.01 1250.92L1250.67 954.48V332.389Z" fill="#5515A6" />
        </svg>
    )
}

export default Logo
