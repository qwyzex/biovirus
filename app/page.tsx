"use client";
import Image from "next/image";
import styles from "./page.module.sass";
import { useState, useEffect } from "react";
import Head from "next/head";

const InputProgress = (
    progress: string,
    [cover, pembukaan, klasifikasi_1, klasifikasi_2, kesimpulan]: any
) => {
    {
        return progress === "cover"
            ? cover
            : progress === "pembukaan"
            ? pembukaan
            : progress === "klasifikasi_1"
            ? klasifikasi_1
            : progress === "klasifikasi_2"
            ? klasifikasi_2
            : progress === "kesimpulan"
            ? kesimpulan
            : "";
    }
};

export interface ProgressType {
    progress: "cover" | "pembukaan" | "klasifikasi_1" | "klasifikasi_2" | "kesimpulan";
}

export default function Home() {
    const [progress, setProgress] = useState("cover");
    const [loading, setLoading] = useState(false);

    // animasi
    const [animation1, setAnimation1] = useState(false);
    const [animation2, setAnimation2] = useState(false);
    const [animation3, setAnimation3] = useState(false);
    const [animation4, setAnimation4] = useState(false);

    const Cover = () => {
        const [openBox, setOpenBox] = useState(false);

        useEffect(() => {
            setAnimation1(false);
            setAnimation2(false);
            setAnimation3(false);
            setAnimation4(false);
        });

        return (
            <div className={`${styles.subjectBox} ${styles.cover}`}>
                <button
                    onClick={() => {
                        setLoading(true);
                        setTimeout(() => {
                            setProgress("pembukaan");
                            setLoading(false);
                        }, 1000);
                    }}
                >
                    <Image
                        src={"/vector_smansa.png"}
                        alt="Logo SMANSA Metro"
                        width={400}
                        height={400}
                    ></Image>
                </button>
                <div
                    className={`${styles.anggotaBox} ${openBox ? styles.dim : ""}`}
                    onClick={() => {
                        openBox ? setOpenBox(false) : setOpenBox(true);
                    }}
                >
                    <h2>TENTANG</h2>
                </div>
                <div className={`${styles.infoBox} ${openBox ? styles.open : ""}`}>
                    <h2>Kelompok 4 Biologi</h2>
                    <h3>&quot;Klasifikasi Virus&quot;</h3>
                    <p>Kelas 10.7</p>
                    <hr />
                    <br />
                    <p>Anggota :</p>
                    <p>- Ihsan Fashbir Danurrahardjo</p>
                    <p>- Wisa Ajeng Salsabilla</p>
                    <p>- Nabila Aulia Putri</p>
                    <p>- Alzera Eli Maiza</p>
                </div>
            </div>
        );
    };

    const Pembukaan = () => {
        useEffect(() => {
            setTimeout(() => {
                setAnimation1(true);
            }, 1000);
        }, []);

        return (
            <div
                className={`${styles.subjectBox} ${styles.pembukaan} ${
                    animation1 ? styles.animated : ""
                }`}
            >
                <h1>APA ITU VIRUS</h1>
                <Image
                    src={"/virus_images/v4.png"}
                    alt="Virus Image"
                    priority
                    width={1000}
                    height={1000}
                ></Image>
                <article>
                    Virus adalah entitas biologis mikroskopis yang terdiri dari materi
                    genetik (baik berupa asam nukleat DNA atau RNA) yang dibungkus dalam
                    protein atau lipida. Virus tidak memiliki struktur seluler dan tidak
                    dapat melakukan metabolisme sendiri. Mereka hanya dapat mereplikasi
                    diri mereka sendiri dengan menggunakan sel inang (sel organisme lain)
                    untuk berkembang biak. Virus sering dianggap sebagai entitas antara
                    organisme hidup dan non-hidup karena mereka tidak memiliki fungsi
                    seluler mandiri, tetapi dapat menyebabkan infeksi pada organisme lain.
                    <br />
                    <br />
                    Dalam upaya untuk memahami dan mengkaji keragaman yang luar biasa
                    dalam dunia mikroorganisme, kita akan membahas dengan rinci sistem
                    klasifikasi virus. Virus, entitas biologis mikroskopis yang sering
                    menjadi penyebab penyakit dan memiliki peran penting dalam berbagai
                    aspek ilmu biologi, akan dianalisis melalui pendekatan taksonomi yang
                    memungkinkan kita untuk mengelompokkan dan memahami mereka secara
                    lebih mendalam.
                </article>
            </div>
        );
    };

    const Klasifikasi_1 = () => {
        useEffect(() => {
            setTimeout(() => {
                setAnimation2(true);
            }, 1000);
        }, []);

        return (
            <div
                className={`${styles.subjectBox} ${styles.klasifikasi_1} ${
                    animation2 ? styles.animated : ""
                }`}
            >
                <h1>APA ITU KLASIFIKASI VIRUS</h1>
                <article>
                    <h4>
                        Klasifikasi virus adalah pengelompokan virus untuk mengetahui
                        tentang informasi informasi mengenai sifat sifat virus.
                    </h4>
                    <br />
                    Dasar dasar yang digunakan untuk klasifikasi virus di antaranya
                    adalah:
                    <br />
                    <br />
                    <ul>
                        <li>1. Jenis asam nukleat.</li>
                        <li>
                            2. Ukuran, morfologi, jenis simetri, jumlah kapsomer dan ada
                            atau tidaknya membran.{" "}
                        </li>
                        <li>3. Kandungan enzim tertentu yang dimiliki.</li>
                        <li>4. Kerentanan terhadap pengaruh fisika dan kimia.</li>
                        <li>5. Sifat imunologis.</li>
                        <li>6. Jenis sel inang (kesesuaian reseptor).</li>
                        <li>7. Cara penularan secara ilmiah.</li>
                        <li>8. Simtotamologi (penyakit yang ditimbulkan).</li>
                    </ul>
                    <br />
                    Ada beberapa sistem klasifikasi virus yang digunakan oleh para ahli,
                    seperti sistem <b>Baltimore</b>, sistem <b>Lwoff</b>, dan sistem{" "}
                    <b>International Committee on Taxonomy of Viruses (ICTV)</b>.
                </article>
                <Image
                    src={"/virus_images/v2.png"}
                    alt="Virus Image"
                    priority
                    width={1300}
                    height={675}
                ></Image>
            </div>
        );
    };
    const Klasifikasi_2 = () => {
        const [sistemKlasif, setSistemKlasif] = useState("");

        useEffect(() => {
            setSistemKlasif("");
            setTimeout(() => {
                setAnimation3(true);
            }, 1000);
        }, []);

        return (
            <div
                className={`${styles.subjectBox} ${styles.klasifikasi_2} ${
                    animation3 ? styles.animated : ""
                }`}
            >
                <h1>PENGKLASIFIKASIAN VIRUS</h1>
                <div className={styles.containerKlasifikasi}>
                    <div className={styles.pilihanKlasifikasi}>
                        <h3>Sistem Klasifikasi</h3>
                        <div
                            className={`${styles.childKlasifikasi} ${
                                sistemKlasif == "baltimore" ? styles.active : ""
                            }`}
                            onClick={() => {
                                setSistemKlasif("baltimore");
                            }}
                        >
                            KLASIFIKASI BALTIMORE
                        </div>
                        <div
                            className={`${styles.childKlasifikasi} ${
                                sistemKlasif == "ictv" ? styles.active : ""
                            }`}
                            onClick={() => {
                                setSistemKlasif("ictv");
                            }}
                        >
                            SISTEM ICTV
                        </div>
                    </div>
                    <div className={styles.kontenKlasifikasi}>
                        {sistemKlasif == "baltimore" ? (
                            <>
                                <h4>Sistem Baltimore</h4>
                                <p>
                                    Klasifikasi Baltimore adalah sebuah sistem klasifikasi
                                    virus yang dikembangkan oleh ilmuwan Amerika Serikat
                                    David Baltimore, yang membagi virus kepada beberapa
                                    keluarga, tergantung tipe genom dan metode
                                    replikasinya.
                                </p>
                                <br />
                                <p>
                                    Sistem klasifikasi Baltimore digunakan untuk
                                    mengelompokkan virus berdasarkan mekanisme replikasi
                                    asam nukleatnya. Terdapat tujuh kelas utama dalam
                                    sistem ini:
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            1. <b>Kelas I</b>: Virus DNA ganda untai
                                            (dsDNA). <br />
                                            <i>
                                                Contoh virusnya adalah Herpes Simpleks
                                                Virus (HSV).
                                            </i>
                                        </li>
                                        <li>
                                            2. <b>Kelas II</b>: Virus DNA untai tunggal
                                            (ssDNA). <br />
                                            <i>
                                                Contoh virusnya adalah Filamentous Phage
                                                M13.
                                            </i>
                                        </li>
                                        <li>
                                            3. <b>Kelas III</b>: Virus RNA ganda untai
                                            (dsRNA). <br />
                                            <i>Contoh virusnya adalah Reovirus.</i>
                                        </li>
                                        <li>
                                            4. <b>Kelas IV</b>: Virus RNA utas tunggal
                                            positif (ssRNA+). <br />{" "}
                                            <i>
                                                Contoh virusnya adalah Virus Hepatitis A.
                                            </i>
                                        </li>
                                        <li>
                                            5. <b>Kelas V</b>: Virus RNA untai ganda
                                            (dsRNA). <br />
                                            <i>
                                                Contoh virusnya adalah Bluetongue Virus.
                                            </i>
                                        </li>
                                        <li>
                                            6. <b>Kelas VI</b>: Virus RNA utas tunggal
                                            negatif (ssRNA-). <br />{" "}
                                            <i>Contoh virusnya adalah Virus Influenza.</i>
                                        </li>
                                        <li>
                                            7. <b>Kelas VII</b>: Virus Retrovirus (ssRNA+
                                            yang melalui tahap reverse transcription).{" "}
                                            <br />
                                            <i>
                                                Contoh virusnya adalah HIV (Human
                                                Immunodeficiency Virus).
                                            </i>
                                        </li>
                                    </ul>
                                    <br />
                                    Sistem Baltimore membantu dalam pemahaman mekanisme
                                    replikasi virus dan kategorisasi virus berdasarkan
                                    jenis asam nukleat mereka.
                                </p>
                            </>
                        ) : sistemKlasif == "ictv" ? (
                            <>
                                <h4>ICTV System</h4>
                                <p>
                                    International Committee on Taxonomy of Viruses (ICTV)
                                    adalah badan yang mengembangkan dan memelihara sistem
                                    klasifikasi virus yang diterima secara internasional.
                                    Sistem klasifikasi ICTV berfokus pada{" "}
                                    <b>karakteristik biologis dan molekuler virus</b>,
                                    termasuk genom, struktur, dan siklus hidupnya. Berikut
                                    adalah komponen penting dalam sistem klasifikasi ICTV:
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            1. <b>Ordo</b>: Ordo adalah tingkatan
                                            tertinggi dalam taksonomi virus. Virus-virus
                                            dikelompokkan berdasarkan karakteristik
                                            genetik, struktural, dan biologis yang mirip
                                            dalam ordo yang sama. Contohnya adalah ordo
                                            Mononegavirales, yang mencakup virus-virus
                                            seperti Ebola dan Rabies.
                                        </li>
                                        <li>
                                            2. <b>Famili</b>: Di bawah ordo, virus-virus
                                            dikelompokkan menjadi famili. Famili
                                            menggambarkan kesamaan karakteristik virus
                                            yang lebih spesifik. Misalnya, dalam famili
                                            Flaviviridae, Anda akan menemukan virus Dengue
                                            dan Zika.
                                        </li>
                                        <li>
                                            3. <b>Genus</b>: Di tingkat ini, virus-virus
                                            dikelompokkan berdasarkan kesamaan genetik
                                            yang lebih mendalam. Genus adalah tingkatan
                                            yang lebih spesifik daripada famili. Contoh
                                            genus adalah Flavivirus, yang mencakup
                                            virus-virus seperti Dengue dan Zika.
                                        </li>
                                        <li>
                                            4. <b>Spesies</b>: Spesies adalah tingkat
                                            terendah dalam taksonomi virus. Virus-virus
                                            dalam spesies yang sama harus memiliki
                                            kesamaan yang cukup besar dalam karakteristik
                                            mereka. Misalnya, virus Dengue dikelompokkan
                                            dalam spesies &quot;Dengue virus.&quot;
                                        </li>
                                    </ul>                
                                    <br />
                                    <p>Dunia (-viria)</p>
                                    <p>..Subdunia (-vira)</p>
                                    <p>....Kerajaan (-viriae)</p>
                                    <p>......Subkerajaan (-virites)</p>
                                    <p>........Filum (-viricota)</p>
                                    <p>..........Subfilum (-viricotina)</p>
                                    <p>............Kelas (-viricetes)</p>
                                    <p>..............Subkelas (-viricetidae)</p>
                                    <p>................Ordo (-virales)</p>
                                    <p>..................Subordo (-virineae)</p>
                                    <p>....................Famili (-viridae)</p>
                                    <p>......................Subfamili (-virinae)</p>
                                    <p>........................Genus (-virus)</p>
                                    <p>..........................Subgenus (-virus)</p>
                                    <p>............................Spesies</p>
                                    <br />
                                    ICTV juga memberikan nomor dan deskripsi untuk setiap
                                    virus yang mereka klasifikasikan. Ini membantu ilmuwan
                                    secara internasional berbagi informasi dan memahami
                                    virus-virus dengan cara yang seragam. Keseluruhan,
                                    sistem klasifikasi ICTV memberikan landasan penting
                                    untuk memahami dan berkomunikasi tentang keragaman
                                    virus di seluruh dunia.
                                    <br />
                                    <br />
                                    Berikut adalah standar penulisan klasifikasi virus
                                    menurut sistem ICTV:
                                    <br />
                                    <br />
                                    <ul>
                                        <li>
                                            1.
                                            <p>
                                                a) Famili : <i>Poxviridae</i>{" "}
                                            </p>
                                            <p>
                                                b) Genus : <i>Orthopoxvirus</i>{" "}
                                            </p>
                                            <p>
                                                c) Spesies : Variola virus (penyebab
                                                cacar)
                                            </p>
                                        </li>
                                        <br />
                                        <li>
                                            2.
                                            <p>
                                                a) Famili : <i>Picornavirdae</i>{" "}
                                            </p>
                                            <p>
                                                b) Genus : <i>Enterovirus</i>{" "}
                                            </p>
                                            <p>
                                                c) Spesies : Poliovirus ( penyebab polio )
                                            </p>
                                        </li>
                                    </ul>
                                </p>
                            </>
                        ) : (
                            <>
                                Berikut ini adalah 2 dari beberapa sistem klasifikasi
                                virus yang ada. Yang pertama adalah sistem Baltimore, yang
                                ditemukan oleh ahli biologi molekuler, David Baltimore.
                                Dan yang selanjutnya adalah sistem International Comittee
                                on Taxonomy of Viruses atau ICTV. Tentu masih ada beberapa
                                sistem klasifikasi virus lain, namun kedua sistem ini
                                adalah yang paling populer dan efektif.
                            </>
                        )}
                    </div>
                </div>
                <Image
                    src={"/virus_images/v1.png"}
                    alt="Virus Image"
                    priority
                    width={1000}
                    height={1000}
                ></Image>
            </div>
        );
    };

    const Kesimpulan = () => {
        useEffect(() => {
            setTimeout(() => {
                setAnimation4(true);
            }, 1000);
        }, []);
        return (
            <div
                className={`${styles.subjectBox} ${styles.kesimpulan} ${
                    animation4 ? styles.animated : ""
                }`}
            >
                <h1>KESIMPULAN</h1>
                <article>
                    Selain dapat menyebabkan penyakit dan dampak-dampak negatif lainnya,
                    ternyata virus juga memiliki manfaat juga. Beberapa diantaranya yakni
                    virus telah digunakan dalam pengembangan vaksin dan terapi, seperti
                    virus yang dilemahkan atau dimodifikasi yang dapat melatih sistem
                    kekebalan tubuh. Lalu virus dapat digunakan dalam penelitian genetika
                    dan rekayasa genetika untuk mengidentifikasi atau memasukkan gen
                    tertentu dalam organisme. Dan virus juga dapat memberikan wawasan
                    dalam penelitian biologi dan penyakit.
                    <br />
                    <br />
                    Pembahasan mengenai sistem klasifikasi virus adalah langkah penting
                    dalam memahami dan mengelola berbagai jenis virus. Dengan adanya
                    sistem klasifikasi, kita dapat mengidentifikasi hubungan antara
                    virus-virus berbeda, memahami sifat-sifat mereka, dan merencanakan
                    strategi perlindungan atau pengobatan yang lebih efektif. Sistem
                    klasifikasi virus juga memungkinkan kita untuk mempelajari evolusi
                    virus dan bagaimana mereka dapat beradaptasi. Kesimpulannya, sistem
                    klasifikasi virus berperan penting dalam ilmu virologi dan dapat
                    membantu dalam mengatasi ancaman virus-virus yang ada dan yang akan
                    datang.
                </article>
                <Image
                    src={"/virus_images/v5.png"}
                    alt="Virus Image"
                    priority
                    width={1000}
                    height={1000}
                ></Image>
            </div>
        );
    };

    return (
        <>
        <Head>
            <link rel="icon" href="/virus_images/v4.png" />
        </Head>
        <main className={`${styles.main}`}>
            <div
                className={`${styles.container} ${loading == true ? styles.loading : ""}`}
            >
                {InputProgress(progress, [
                    <Cover key={0} />,
                    <Pembukaan key={1} />,
                    <Klasifikasi_1 key={2} />,
                    <Klasifikasi_2 key={3} />,
                    <Kesimpulan key={4} />,
                ])}
            </div>
            <div
                className={`${styles.buttonContainer} ${
                    progress == "cover" ? "" : styles.showButton
                }`}
            >
                <button
                    className={styles.nextButton}
                    type="button"
                    disabled={loading ? true : false}
                    onClick={function () {
                        setLoading(true);
                        setTimeout(() => {
                            setProgress(
                                InputProgress(progress, [
                                    "pembukaan",
                                    "klasifikasi_1",
                                    "klasifikasi_2",
                                    "kesimpulan",
                                    "cover",
                                ])
                            );
                            setLoading(false);
                        }, 1000);
                    }}
                >
                    <p>{progress == "kesimpulan" ? "S E L E S A I" : "N E X T"}</p>
                </button>
            </div>
        </main></>
    );
}
