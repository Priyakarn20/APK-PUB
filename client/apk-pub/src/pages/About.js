import React from "react";
import './About.css'

const About = () => {
    return (
        <div>
            <h1 className="about-us">
                About Us
            </h1>
            <p className="para">
                Today there are thousands of publishers with millions of publication in each field of research that are not limited to engineering,
                science, medical, social science, business, education, mathematics, economics etc. There are a lot of indexing available
                and some of most reputable databases are Scopus by Elsevier, Web of Science by Clarivate, DOAJ, PubMed, UGC CARE etc. Journals
                ranging from open access to closed access, free publication to paid publication.
                <br />
                Author faces very difficulty in selecting a specific journal according their specific requirement.
                An author may be researcher, a PhD student, lecturer, professor, HOD, principle of any institution,
                employee of any private or public sector institution. Many author with low knowledge of computers face issues in
                formatting of article according to journal guidelines.
                <br />
                And about many articles are just rejected due to incorrect scope of journal, formatting not
                according to journal guidelines, author not submitted in specific review period and much more little reasons
                that can be avoided with our help.
                <br />
                All author needs to get their research published with a tight schedule with minimal budget in indexed
                and reputed journal. Many institutions require different journals indexed in different databases.
                <br />
            </p>
        </div>
    )
}

export default About;