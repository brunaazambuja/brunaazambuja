export default function cssQuery(key) {
    const responsiveBreaks = {
        tablet: "1110px",
        phone: "850px",
        smallPhone: "630px",
    }

    return responsiveBreaks[key]
}