import { execSync } from 'child_process';

export interface GitFileInfo {
  createdAt: Date; // 作成日時
  updatedAt: Date;  // 更新日時
}

const fallbackDate = new Date('2024-11-01T00:00:00+09:00');

export async function getFileInfo(filePath: string): Promise<GitFileInfo | null> {
  try {
    const createdAt = execSync(
      `git log --diff-filter=A --format=%aI -- ${filePath}`,
      { encoding: 'utf-8' }
    ).trim();

    const updatedAt = execSync(
      `git log -1 --format=%aI -- ${filePath}`,
      { encoding: 'utf-8' }
    ).trim();

    return {
      createdAt: createdAt ? new Date(createdAt) : fallbackDate,
      updatedAt: updatedAt ? new Date(updatedAt) : fallbackDate
    }
  } catch (error) {
    console.error(`Failed to get file info for ${filePath}`, error);
    return null;
  }
}
