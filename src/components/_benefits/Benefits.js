import React from "react";
import {
  Container,
  Tile,
  TileGrid,
  Decor,
  Line,
  Image,
} from "./Benefits.styled";
import DecorSvg from "../../../src/assets/svg/decor.svg";
import LineSvg from "../../../src/assets/svg/line.svg";
import Python from "../../../src/assets/svg/python-logo.svg";
import Tensorflow from "../../../src/assets/images/tensorflow.png";
import SciKit from "../../../src/assets/images/scikit.png";
import R from "../../../src/assets/images/r.jpg";
import Sql from "../../../src/assets/images/sql.png";
import Mongo from "../../../src/assets/images/mongo.png";
import {
  SmallerParagraph,
  Paragraph,
  SmallTitle,
  SectionTitle,
} from "../CommonStyle";

const technologies = [
  {
    image: Python,
    title: "Python",
    description:
      "Najpopularniejszy język programowania w zastosowaniach sztucznej inteligencji. Jeden z najpoluarniejszych jezyków w ogóle, a jego popularność stale rośnie. Charakteryzuje się prostą składnią i czytelnością kodu.",
  },
  {
    image: Tensorflow,
    title: "Tensorflow",
    description:
      "Biblioteka programistyczna stworzona przez Google Brain Team. Wykorzystywana w szczególności do uczenia głębokich sieci neuronowych. Jedno z najpopularniejszych narzędzi współczesnego uczenia maszynowego. ",
  },
  {
    image: SciKit,
    title: "Sk-learn",
    description:
      "Bogata biblioteka programistyczna zawierająca szereg metod przydatnych w analizie danych. Zawiera moduły umożliwiające tworzenie modeli klasyfikacji, regresji, czy grupowania danych, jak również ekstrakcji cech, czy wstępnej obróbki danych.",
    top: true,
  },
  {
    image: R,
    title: "r",
    description:
      "Język programowania oraz środowisko wykorzystywane w analizie danych. Jego szczególną zaletą jest łatwość tworzenia modeli probabilistycznych, (w szczególności regresyjnych), oraz analiza statystyczna danych.",
  },
  {
    image: Sql,
    title: "Sql",
    description:
      "Znajomość narzędzi gromadzenia oraz przetwarzania danych jest niezbednym elementem pracy anlityka danych. Jedną z najczęściej wykorzystywanych struktur są relacyjne bazy danych. Znajomość sql jest podstawą nie tylko w zagadnieniach sztucznej inteligencji.",
  },
  {
    image: Mongo,
    title: "Mongo DB",
    description:
      "Wraz ze wzrostem ilości gromadzonych danych konieczne stało się wykorzystanie narzędzi pozwalających na przetwarzanie danych o różnej, często złożonej, strukturze. Współczesny data scientist musi potrafić wyjść poza ramy danych relacyjnych i poznać narzędzia typu NoSQL",
  },
];

const Benefits = () => {
  return (
    <Container id="benefits">
      <SectionTitle black>Technologie</SectionTitle>
      <Paragraph black>
        Znajomość najpopularniejszych technologii pozwalających na szybki i
        prosty sposób zarządzać, i manipulować danymi, jest podstawą w analize
        danych. Jest to dynaicznie zmienijający się obszar. Na naszym kierunku
        Studenci poznają najpopularniejsze technologie szeroko stosowane przez
        największych gigantów na rynku. Jedynie kilka najważniejszych z nich
        wymienione jest poniżej:
      </Paragraph>
      <TileGrid>
        {technologies.map((technology, index) => {
          return (
            <Tile data-aos="fade" key={index}>
              <Decor src={DecorSvg} />
              <Image
                src={technology.image}
                top={technology.top ? true : false}
              />
              <SmallTitle black>{technology.title}</SmallTitle>
              <Line src={LineSvg} />
              <SmallerParagraph black>
                {technology.description}
              </SmallerParagraph>
            </Tile>
          );
        })}
      </TileGrid>
    </Container>
  );
};

export default Benefits;
