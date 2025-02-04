import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Lecture {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  date: string;
  progress?: number;
  thumbnail: string;
}

interface LiveSession {
  id: number;
  title: string;
  instructor: string;
  startTime: string;
  duration: string;
  status: 'upcoming' | 'live' | 'ended';
}

interface Note {
  id: number;
  title: string;
  course: string;
  lastModified: string;
}

interface Assignment {
  id: number;
  title: string;
  course: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activeTab = signal('overview');
  
  recordedLectures = signal<Lecture[]>([
    {
      id: 1,
      title: 'Introduction to Web Development',
      instructor: 'John Smith',
      duration: '1h 30m',
      date: '2024-01-15',
      progress: 75,
      thumbnail: 'assets/images/web-dev.jpg'
    },
    {
      id: 2,
      title: 'Database Design Fundamentals',
      instructor: 'Sarah Johnson',
      duration: '2h 15m',
      date: '2024-01-18',
      progress: 30,
      thumbnail: 'assets/images/database.jpg'
    }
  ]);

  liveSessions = signal<LiveSession[]>([
    {
      id: 1,
      title: 'Advanced JavaScript Concepts',
      instructor: 'Mike Wilson',
      startTime: '2024-01-21 10:00 AM',
      duration: '1h',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'React Hooks Deep Dive',
      instructor: 'Emily Brown',
      startTime: '2024-01-21 02:00 PM',
      duration: '1h 30m',
      status: 'upcoming'
    }
  ]);

  savedVideos = signal<Lecture[]>([
    {
      id: 3,
      title: 'REST API Best Practices',
      instructor: 'David Lee',
      duration: '1h 45m',
      date: '2024-01-10',
      thumbnail: 'assets/images/api.jpg'
    }
  ]);

  notes = signal<Note[]>([
    {
      id: 1,
      title: 'Web Development Notes - Week 1',
      course: 'Web Development Fundamentals',
      lastModified: '2024-01-19'
    },
    {
      id: 2,
      title: 'Database Design Concepts',
      course: 'Database Management',
      lastModified: '2024-01-18'
    }
  ]);

  assignments = signal<Assignment[]>([
    {
      id: 1,
      title: 'Create a REST API',
      course: 'Web Development Fundamentals',
      dueDate: '2024-01-25',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Database Schema Design',
      course: 'Database Management',
      dueDate: '2024-01-23',
      status: 'submitted'
    }
  ]);

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  joinLiveSession(sessionId: number) {
    console.log('Joining live session:', sessionId);
  }

  downloadNotes(noteId: number) {
    console.log('Downloading notes:', noteId);
  }

  submitAssignment(assignmentId: number) {
    console.log('Submitting assignment:', assignmentId);
  }
}