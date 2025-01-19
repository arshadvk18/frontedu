import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  students: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  courses = signal<Course[]>([
    {
      id: 1,
      title: 'Web Development Fundamentals',
      instructor: 'John Smith',
      description: 'Learn the basics of web development with HTML, CSS, and JavaScript.',
      image: 'assets/images/web-dev.jpg',
      price: 49.99,
      rating: 4.8,
      students: 1250
    },
    {
      id: 2,
      title: 'Data Science Essentials',
      instructor: 'Sarah Johnson',
      description: 'Master the fundamentals of data science and analysis.',
      image: 'assets/images/data-science.jpg',
      price: 59.99,
      rating: 4.9,
      students: 980
    },
    {
      id: 3,
      title: 'Digital Marketing Masterclass',
      instructor: 'Mike Wilson',
      description: 'Complete guide to modern digital marketing strategies.',
      image: 'assets/images/marketing.jpg',
      price: 44.99,
      rating: 4.7,
      students: 1520
    }
  ]);

  handleGetStarted() {
    console.log('Get Started clicked');
  }

  handleBrowseCourses() {
    console.log('Browse Courses clicked');
  }

  enrollCourse(courseId: number) {
    console.log(`Enrolling in course ${courseId}`);
  }
}
