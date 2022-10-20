export type TechIcons = {
  title: string
  icon: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export type ImageProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type LogoProps = ImageProps

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type SectionTechProps = {
  title: string
  techIcons: TechIcons[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{
    title: string
  }>
}

export type Modules = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: Modules[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  pricingInstallments: number
  benefits: string
  button: {
    label: string
    url: string
  }
}

export type SocialLinkProps = {
  title: string
  url: string
}

export type AuthorProps = {
  attributes: {
    photo: ImageProps
    name: string
    role: string
    description: string
    socialLinks: SocialLinkProps[]
  }
}

export type SectionAboutUsProps = {
  title: string
  authors: {
    data: AuthorProps[]
  }
}

export type Review = {
  name: string
  text: string
  photo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

export type SectionReviewsProps = {
  title: string
  reviews: Review[]
}

export type Question = {
  question: string
  answer: string
}

export type SectionFaqProps = {
  title: string
  questions: Question[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
