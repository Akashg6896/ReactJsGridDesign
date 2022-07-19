import React, { Component } from 'react'
// import styles from './BlogCard/BlogCard.module.css'
import BlogCard from './BlogCard/BlogCard'
import styles from './LatestPostsSection.module.css'
class LatestPostsSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      BlogCardDetails: [
        {
          name: 'Artificial Intelligence',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg',
          title: 'Typical day of Data Scientist - An insider',
          authorName: 'Saurav Ghosh',
          date: '05 Jul 2019',
          desc: `I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that`,
        },
        {
          name: 'Artificial Intelligence',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg',
          title: 'Getting started with Artificial Intelligence',
          authorName: 'EdYoda',
          date: '08 Jul 2019',
          desc: `We’re rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been th`,
        },
        {
          name: 'Artificial Intelligence',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/overview-of-natural-language-processing-in-artificial-intelligence.jpg',
          title: 'Overview of Natural Language Processing i',
          authorName: 'EdYoda',
          date: '21 Jul 2019',
          desc: `Over the last few years, Artificial Intelligence has made a prominent space as it uses technology that has made machines capable to perform`,
        },
        {
          name: 'Artificial Intelligence',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/how-humans-tame-the-world-with-artificial-intelligence.jpg',
          title: 'How Humans Tame the World with Artificial',
          authorName: 'EdYoda',
          date: '23 Jul 2019',
          desc: `Humans evolution and usage of technology have been a constant feature throughout the history of Humanity. So evolution and tech have always been a big constant`,
        },
        {
          name: 'Artificial Intelligence',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png',
          title: 'Introduction To A Machine Learning',
          authorName: 'EdYoda',
          date: '23 Aug 2019',
          desc: `We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this`,
        },
        {
          name: 'Artificial Intelligence',
          image: 'https://edyoda.s3.amazonaws.com/media/blog-images/3.png',
          title: 'Challenges of Machine Learning in Big Data',
          authorName: 'EdYoda',
          date: '24 Aug 2019',
          desc: `Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the`,
        },
        {
          name: 'Cloud Computing',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg',
          title: 'edYoda Meetup #01 : A Date with Cloud',
          authorName: 'Ashish Pandey',
          date: '05 Jul 2019',
          desc: `I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the`,
        },
        {
          name: 'Cloud Computing',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg',
          title: 'Amazon Web Services (AWS) Cloud Day -',
          authorName: 'Kalyan Mahalingam',
          date: '05 Jul 2019',
          desc: `It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels`,
        },
        {
          name: 'Cloud Computing',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg',
          title: 'Learn cloud computing- an introduction',
          authorName: 'EdYoda',
          date: '11 Jul 2019',
          desc: `If you learn cloud computing then you can make things much easier for your projects. You do not have to rely on multiple hard drives or data storage devices for with`,
        },
        {
          name: 'Cloud Computing',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/an-introduction-to-green-cloud-computing.jpg',
          title: 'An Introduction to Green Cloud Computing',
          authorName: 'EdYoda',
          date: '21 Jul 2019',
          desc: `Sustainability has been gaining importance since the last two decade because of the extensive exploitation of natural resources by mankind. It has been noted`,
        },
        {
          name: 'Cloud Computing',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/the-new-way-to-encrypt-cloud-data-cloud-cryptography.jpg',
          title: 'The New Way to Encrypt Cloud Data- Cloud',
          authorName: 'EdYoda',
          date: '23 Jul 2019',
          desc: `Distributed computing is one of the well-known subjects of the present world. The Internet has begun driving all these new innovations. The Internet was`,
        },
        {
          name: 'DevOps',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg',
          title: 'From identity crisis to the Success Story - Th',
          authorName: 'Kalyan Mahalingam',
          date: '05 Jul 2019',
          desc: `DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the`,
        },
        {
          name: 'DevOps',
          image:
            'https://edyoda.s3.amazonaws.com/media/blog-images/understanding-devops.jpg',
          title: 'Understanding DevOps',
          authorName: 'EdYoda',
          date: '23 Jul 2019',
          desc: `DevOps is a term derived after combining development and operation for a common purpose- driving the development of operational processes. It`,
        },
      ],
      filterBlogCardDetails: [],
      // filterBlogCardDetails: [
      //   {
      //     name: 'Artificial Intelligence',
      //     image:
      //       'https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg',
      //     title: 'Typical day of Data Scientist - An insider',
      //     authorName: 'Saurav Ghosh',
      //     date: '05 Jul 2019',
      //     desc: `I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that`,
      //   },
      //   {
      //     name: 'Artificial Intelligence',
      //     image:
      //       'https://edyoda.s3.amazonaws.com/media/blog-images/learn-artificial-intelligence.jpeg',
      //     title: 'Getting started with Artificial Intelligence',
      //     authorName: 'EdYoda',
      //     date: '08 Jul 2019',
      //     desc: `We’re rapidly moving towards a day and age where almost everything can be controlled by machines and one of the most revolutionary moves has been th`,
      //   },
      //   {
      //     name: 'Artificial Intelligence',
      //     image:
      //       'https://edyoda.s3.amazonaws.com/media/blog-images/overview-of-natural-language-processing-in-artificial-intelligence.jpg',
      //     title: 'Overview of Natural Language Processing i',
      //     authorName: 'EdYoda',
      //     date: '21 Jul 2019',
      //     desc: `Over the last few years, Artificial Intelligence has made a prominent space as it uses technology that has made machines capable to perform`,
      //   },
      //   {
      //     name: 'Artificial Intelligence',
      //     image:
      //       'https://edyoda.s3.amazonaws.com/media/blog-images/how-humans-tame-the-world-with-artificial-intelligence.jpg',
      //     title: 'How Humans Tame the World with Artificial',
      //     authorName: 'EdYoda',
      //     date: '23 Jul 2019',
      //     desc: `Humans evolution and usage of technology have been a constant feature throughout the history of Humanity. So evolution and tech have always been a big constant`,
      //   },
      //   {
      //     name: 'Artificial Intelligence',
      //     image:
      //       'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png',
      //     title: 'Introduction To A Machine Learning',
      //     authorName: 'EdYoda',
      //     date: '23 Aug 2019',
      //     desc: `We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what this`,
      //   },
      //   {
      //     name: 'Artificial Intelligence',
      //     image: 'https://edyoda.s3.amazonaws.com/media/blog-images/3.png',
      //     title: 'Challenges of Machine Learning in Big Data',
      //     authorName: 'EdYoda',
      //     date: '24 Aug 2019',
      //     desc: `Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the`,
      //   },
      // ],
    }
  }
  //   shouldComponentUpdate() {
  setFilteredBlogDetails = () => {
    if (
      //   this.state.filterBlogCardDetails.length === 0 &&
      this.props.category === 'All' ||
      this.props.category === ''
    ) {
      return this.state.BlogCardDetails
    } else {
      let filterBlogCardDetails = this.state.BlogCardDetails.filter(
        (blogCard) => blogCard.name === this.props.category
        // (blogCard) => blogCard.name === this.props.category
        //  (blogCard) => //{
        //   console.log(`blogCard.name:${blogCard.name}`)
        //   console.log(`this.props.category:${this.props.category}`)
        // return blogCard.name === this.props.category
        //}
      )
      console.log(filterBlogCardDetails)
      return filterBlogCardDetails
    }
  }
  //   shouldComponentUpdate = (nextProps) => {
  //     if (
  //       this.props.category !== nextProps.category &&
  //       this.props.category !== undefined
  //     ) {
  //       this.setState(
  //         {
  //           filterBlogCardDetails: this.setFilteredBlogDetails(),
  //         },
  //         () =>
  //           console.log(
  //             `this.state.filterBlogCardDetails:${this.state.filterBlogCardDetails}`
  //           )
  //       )

  //       return true
  //     } else {
  //       return false
  //     }
  //     // this.props.category = ''
  //   }

  //     }

  //     return true
  //   }
  render() {
    // if (this.props.category === null || undefined) {
    //   filterBlogCardDetails = BlogCardDetails
    // } else {

    // }
    // this.updateComponent()
    let { filterBlogCardDetails } = this.state
    // if (filterBlogCardDetails.length === 0) {
    //   filterBlogCardDetails = this.state.BlogCardDetails
    // } else {
    filterBlogCardDetails = this.setFilteredBlogDetails()
    // }
    // console.log(`BlogCardDetails: ${this.state.BlogCardDetails}`)
    // console.log(`this.props.category:${this.props.category}`)
    // console.log(`filterBlogCardDetails: ${filterBlogCardDetails}`)
    return (
      <div className={styles.BlogContainer}>
        {filterBlogCardDetails.map((blogCardDetail) => (
          <BlogCard card={blogCardDetail} key={blogCardDetail.title} />
        ))}
      </div>
    )
  }
}

export default LatestPostsSection
